import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from "@nestjs/common";
import { SignupCredentialsDto } from "./dto/signup-credential.dto";
import { UserRepository } from "./user.repository";
import * as bcrypt from "bcryptjs";
import { LoginCredentialsDto } from "./dto/login-credential.dto";
import { JwtService } from "@nestjs/jwt";
import { User } from "./user.entity";

@Injectable()
export class AuthService {
  constructor(
    private userRepository: UserRepository,
    private jwtService: JwtService
  ) {}

  async signup(signupCredentialsDto: SignupCredentialsDto): Promise<void> {
    return this.userRepository.createUser(signupCredentialsDto);
  }

  async login(
    loginCredentialsDto: LoginCredentialsDto
  ): Promise<{ accessToken: string }> {
    const { email, password } = loginCredentialsDto;
    const user = await this.userRepository.findOne({ where: { email } });

    if (user && (await bcrypt.compare(password, user.password))) {
      // 유저 토큰 생성 ( Secret + Payload )
      const payload = { email };
      const accessToken = await this.jwtService.sign(payload);

      return { accessToken };
    } else {
      throw new UnauthorizedException("login failed");
    }
  }

  async deleteUser(id: number): Promise<void> {
    const result = await this.userRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`id가 ${id}인 유저를 찾지 못했습니다.`);
    }
  }

  check(user: User): string {
    if (user.email === "zockq1@naver.com") {
      return "admin";
    }
    return "user";
  }
}
