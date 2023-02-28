import { CreatePostDto } from "./dto/create-post.dto";
import { Post as BlogPost } from "./post.entity";
import { PostService } from "./post.service";
export declare class PostController {
    private postService;
    private logger;
    constructor(postService: PostService);
    getAllPosts(): Promise<BlogPost[]>;
    getPostById(id: number): Promise<BlogPost>;
    createPost(createPostDto: CreatePostDto): Promise<BlogPost>;
    deletePost(id: number): Promise<void>;
}
