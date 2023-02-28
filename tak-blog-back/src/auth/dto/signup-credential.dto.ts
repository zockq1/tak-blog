import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class SignupCredentialsDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @MinLength(8)
  password: string;

  @IsString()
  @IsNotEmpty()
  nickname: string;
}
