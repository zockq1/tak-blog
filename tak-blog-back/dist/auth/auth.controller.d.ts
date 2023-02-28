import { AuthService } from "./auth.service";
import { LoginCredentialsDto } from "./dto/login-credential.dto";
import { SignupCredentialsDto } from "./dto/signup-credential.dto";
import { User } from "./user.entity";
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signup(signupCredentialsDto: SignupCredentialsDto): Promise<void>;
    login(loginCredentialsDto: LoginCredentialsDto): Promise<{
        accessToken: string;
    }>;
    deleteUser(id: number): Promise<void>;
    test(user: User): void;
}
