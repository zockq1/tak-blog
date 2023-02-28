import { Repository } from "typeorm";
import { CustomRepository } from "src/db/typeorm-ex.decorator";
import { User } from "./user.entity";
import * as bcrypt from "bcryptjs";
import { SignupCredentialsDto } from "./dto/signup-credential.dto";
import {
  ConflictException,
  InternalServerErrorException,
} from "@nestjs/common";

@CustomRepository(User)
export class UserRepository extends Repository<User> {
  async createUser(signupCredentialsDto: SignupCredentialsDto): Promise<void> {
    const { email, password, nickname } = signupCredentialsDto;

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = this.create({
      email,
      password: hashedPassword,
      nickname,
    });

    try {
      await this.save(user);
    } catch (error) {
      if (error.code === "23505") {
        throw new ConflictException("이미 존재하는 이메일 입니다.");
      } else {
        throw new InternalServerErrorException();
      }
    }
  }
}
