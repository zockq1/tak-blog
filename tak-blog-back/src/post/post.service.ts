import { Injectable, NotFoundException } from "@nestjs/common";
import { CreatePostDto } from "./dto/create-post.dto";
import { Post } from "./post.entity";
import { PostRepository } from "./post.repository";

@Injectable()
export class PostService {
  constructor(private postRepository: PostRepository) {}

  async getAllPosts(): Promise<Post[]> {
    return this.postRepository.find();
  }

  createPost(createPostDto: CreatePostDto): Promise<Post> {
    return this.postRepository.createPost(createPostDto);
  }

  async getPostById(id: number): Promise<Post> {
    const found = await this.postRepository.findOne({ where: { id } });

    if (!found) {
      throw new NotFoundException(`id가 ${id}인 게시물을 찾지 못했습니다.`);
    }

    return found;
  }

  async deletePost(id: number): Promise<void> {
    const result = await this.postRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`id가 ${id}인 게시물을 찾지 못했습니다.`);
    }
  }
}
