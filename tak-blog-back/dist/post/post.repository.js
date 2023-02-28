"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostRepository = void 0;
const typeorm_1 = require("typeorm");
const post_entity_1 = require("./post.entity");
const typeorm_ex_decorator_1 = require("../db/typeorm-ex.decorator");
let PostRepository = class PostRepository extends typeorm_1.Repository {
    async createPost(createPostDto) {
        const { title, content } = createPostDto;
        const post = this.create({
            title,
            content,
        });
        await this.save(post);
        return post;
    }
};
PostRepository = __decorate([
    (0, typeorm_ex_decorator_1.CustomRepository)(post_entity_1.Post)
], PostRepository);
exports.PostRepository = PostRepository;
//# sourceMappingURL=post.repository.js.map