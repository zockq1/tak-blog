import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { typeORMConfig } from "./configs/typeorm.config";
import { PostModule } from "./post/post.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  imports: [TypeOrmModule.forRoot(typeORMConfig), PostModule, AuthModule],
})
export class AppModule {}
