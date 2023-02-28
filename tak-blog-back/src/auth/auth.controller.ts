import {
  Body,
  Controller,
  Delete,
  Param,
  ParseIntPipe,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { AuthService } from "./auth.service";
import { LoginCredentialsDto } from "./dto/login-credential.dto";
import { SignupCredentialsDto } from "./dto/signup-credential.dto";
import { GetUser } from "./get-user.decorator";
import { OnlyAdminGuard } from "./only-admin.guard";
import { User } from "./user.entity";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("/signup")
  @UsePipes(ValidationPipe)
  signup(@Body() signupCredentialsDto: SignupCredentialsDto): Promise<void> {
    return this.authService.signup(signupCredentialsDto);
  }

  @Post("/login")
  @UsePipes(ValidationPipe)
  login(
    @Body() loginCredentialsDto: LoginCredentialsDto
  ): Promise<{ accessToken: string }> {
    return this.authService.login(loginCredentialsDto);
  }

  @Delete("/:id")
  @UseGuards(AuthGuard("jwt"), OnlyAdminGuard)
  deleteUser(@Param("id", ParseIntPipe) id: number): Promise<void> {
    return this.authService.deleteUser(id);
  }

  @Post("/test")
  @UseGuards(AuthGuard("jwt"), OnlyAdminGuard)
  test(@GetUser() user: User) {
    console.log("user", user);
  }
}
