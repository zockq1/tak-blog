import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class LoginCredentialsDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @MinLength(8)
  password: string;
}
