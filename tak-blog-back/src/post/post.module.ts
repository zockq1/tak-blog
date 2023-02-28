import { Module } from "@nestjs/common";
import { AuthModule } from "src/auth/auth.module";
import { TypeOrmExModule } from "src/db/typeorm-ex.module";
import { PostController } from "./post.controller";
import { PostRepository } from "./post.repository";
import { PostService } from "./post.service";

@Module({
  imports: [TypeOrmExModule.forCustomRepository([PostRepository]), AuthModule],
  controllers: [PostController],
  providers: [PostService],
})
export class PostModule {}
