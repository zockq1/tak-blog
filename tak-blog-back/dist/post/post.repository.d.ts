import { Repository } from "typeorm";
import { Post } from "./post.entity";
import { CreatePostDto } from "./dto/create-post.dto";
export declare class PostRepository extends Repository<Post> {
    createPost(createPostDto: CreatePostDto): Promise<Post>;
}
