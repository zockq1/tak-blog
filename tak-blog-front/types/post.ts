export interface CreatePostForm {
  title: string;
  content: string | undefined;
}

export interface CreatePostAction {
  type: "CREATE_POST_REQUEST";
  data: CreatePostForm;
}

export interface UpdatePostForm {
  postId: number;
  title: string;
  content: string | undefined;
}

export interface UpdatePostAction {
  type: "UPDATE_POST_REQUEST";
  data: UpdatePostForm;
}

export interface DeletePostAction {
  type: "DELETE_POST_REQUEST";
  data: number;
}
