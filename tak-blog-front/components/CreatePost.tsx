import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";

import { Button, Input } from "@/styles/form";
import InputError from "./InputError";
import { CreatePostForm } from "@/types/post";

const schema = yup.object().shape({
  title: yup.string().required("제목을 입력해 주십시오"),
  content: yup.string().required("내용을 입력해 주십시오"),
});
function CreatePost(): React.ReactElement {
  const editorRef = useRef<Editor>(null);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<CreatePostForm>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: CreatePostForm) => {
    console.log(data);
    // 포스트 저장 로직 구현
  };

  const onChange = () => {
    const data = editorRef.current?.getInstance().getHTML();
    setValue("content", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
      <Input
        id="title"
        placeholder="제목"
        backgroundColor="white"
        borderColor="#dadde6"
        {...register("title", { required: true })}
      />
      <InputError error={errors.title?.message} />
      <Editor
        ref={editorRef}
        initialValue=" "
        previewStyle="tab"
        height="450px"
        initialEditType="wysiwyg"
        useCommandShortcut={true}
        onChange={onChange}
      />
      <InputError error={errors.content?.message} />
      <Button type="submit" color="#1f1f1f" backgroundColor="#dadde6">
        작성 완료
      </Button>
    </form>
  );
}

export default CreatePost;
