import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Req,
  Res,
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
import { Response, Request } from "express";

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
  async login(
    @Body() loginCredentialsDto: LoginCredentialsDto,
    @Res() res: Response
  ): Promise<any> {
    const jwt = await this.authService.login(loginCredentialsDto);
    res.setHeader("Authorization", "Bearer " + jwt.accessToken);
    res.cookie("accessToken", jwt.accessToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000, //1 day
    });
    let role = "user";
    if (loginCredentialsDto.email === "zockq1@naver.com") {
      role = "admin";
    }
    return res.send({
      role,
    });
  }

  @Delete("/:id")
  @UseGuards(AuthGuard("jwt"), OnlyAdminGuard)
  deleteUser(@Param("id", ParseIntPipe) id: number): Promise<void> {
    return this.authService.deleteUser(id);
  }

  @Get("/test")
  @UseGuards(AuthGuard("jwt"))
  check(@GetUser() user: User) {
    return this.authService.check(user);
  }
}
