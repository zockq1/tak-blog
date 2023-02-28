import { BaseEntity } from "typeorm";
export declare class Post extends BaseEntity {
    id: number;
    title: string;
    content: string;
    viewCount: number;
    createdAt: Date;
    updatedAt: Date;
}
