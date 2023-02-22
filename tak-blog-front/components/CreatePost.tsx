import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";

import { Button, Input } from "@/styles/form";

type FormData = {
  title: string;
  content: string;
};

const schema = yup.object().shape({
  title: yup.string().required("제목을 입력해 주십시오"),
  content: yup.string().required("내용을 입력해 주십시오"),
});
function CreatePost(): React.ReactElement {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    // 포스트 저장 로직 구현
  };

  useEffect(() => {
    register("content");
  }, [register]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
      <Input
        id="title"
        placeholder="제목"
        backgroundColor="white"
        borderColor="#dadde6"
        {...register("title", { required: true })}
      />
      {errors.title && (
        <div style={{ color: "red", marginBottom: 4, fontSize: 14 }}>
          {errors.title.message}
        </div>
      )}
      <Editor
        initialValue=" "
        previewStyle="tab"
        height="450px"
        initialEditType="wysiwyg"
        useCommandShortcut={true}
        onChange={(e) => setValue("content", e)}
      />
      {errors.content && (
        <span style={{ color: "red", marginTop: 4, fontSize: 14 }}>
          {errors.content.message}
        </span>
      )}

      <Button
        type="submit"
        color="#1f1f1f"
        backgroundColor="#dadde6"
        //isBorder={true}
      >
        작성 완료
      </Button>
    </form>
  );
}

export default CreatePost;
