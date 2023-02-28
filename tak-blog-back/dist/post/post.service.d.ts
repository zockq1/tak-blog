import { CreatePostDto } from "./dto/create-post.dto";
import { Post } from "./post.entity";
import { PostRepository } from "./post.repository";
export declare class PostService {
    private postRepository;
    constructor(postRepository: PostRepository);
    getAllPosts(): Promise<Post[]>;
    createPost(createPostDto: CreatePostDto): Promise<Post>;
    getPostById(id: number): Promise<Post>;
    deletePost(id: number): Promise<void>;
}
