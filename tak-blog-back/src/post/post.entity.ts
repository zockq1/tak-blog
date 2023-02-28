//import { User } from "src/auth/user.entity";
import {
  BaseEntity,
  Column,
  Entity,
  //ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export class Post extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column({ default: 0 })
  viewCount: number;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  createdAt: Date;

  @Column({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP",
    onUpdate: "CURRENT_TIMESTAMP",
  })
  updatedAt: Date;

  // @ManyToOne((type) => User, (user) => user.boards, { eager: false })
  // user: User;
}
