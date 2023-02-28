import { Repository } from "typeorm";
import { Post } from "./post.entity";
import { CreatePostDto } from "./dto/create-post.dto";
import { CustomRepository } from "src/db/typeorm-ex.decorator";

@CustomRepository(Post)
export class PostRepository extends Repository<Post> {
  async createPost(createPostDto: CreatePostDto): Promise<Post> {
    const { title, content } = createPostDto;

    const post = this.create({
      title,
      content,
    });

    await this.save(post);
    return post;
  }
}
