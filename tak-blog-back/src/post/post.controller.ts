import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Param,
  ParseIntPipe,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { OnlyAdminGuard } from "src/auth/only-admin.guard";
import { CreatePostDto } from "./dto/create-post.dto";
import { Post as BlogPost } from "./post.entity";
import { PostService } from "./post.service";

@Controller("post")
export class PostController {
  private logger = new Logger("PostController");
  constructor(private postService: PostService) {}

  @Get("/")
  getAllPosts(): Promise<BlogPost[]> {
    return this.postService.getAllPosts();
  }

  @Get("/:id")
  getPostById(@Param("id") id: number): Promise<BlogPost> {
    return this.postService.getPostById(id);
  }

  @Post("/")
  @UseGuards(AuthGuard("jwt"), OnlyAdminGuard)
  @UsePipes(ValidationPipe)
  createPost(@Body() createPostDto: CreatePostDto): Promise<BlogPost> {
    return this.postService.createPost(createPostDto);
  }

  @Delete("/:id")
  @UseGuards(AuthGuard("jwt"), OnlyAdminGuard)
  deletePost(@Param("id", ParseIntPipe) id: number): Promise<void> {
    return this.postService.deletePost(id);
  }
}
