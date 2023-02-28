import { Repository } from "typeorm";
import { User } from "./user.entity";
import { SignupCredentialsDto } from "./dto/signup-credential.dto";
export declare class UserRepository extends Repository<User> {
    createUser(signupCredentialsDto: SignupCredentialsDto): Promise<void>;
}
