import { SignupCredentialsDto } from "./dto/signup-credential.dto";
import { UserRepository } from "./user.repository";
import { LoginCredentialsDto } from "./dto/login-credential.dto";
import { JwtService } from "@nestjs/jwt";
export declare class AuthService {
    private userRepository;
    private jwtService;
    constructor(userRepository: UserRepository, jwtService: JwtService);
    signup(signupCredentialsDto: SignupCredentialsDto): Promise<void>;
    login(loginCredentialsDto: LoginCredentialsDto): Promise<{
        accessToken: string;
    }>;
    deleteUser(id: number): Promise<void>;
}
