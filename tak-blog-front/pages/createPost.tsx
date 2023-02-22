import { FormWrapper } from "@/styles/form";
import BlogLayout from "@/components/BlogLayout";
// import CreatePost from "../components/CreatePost";

import dynamic from "next/dynamic";

const CreatePost = dynamic(() => import("../components/CreatePost"), {
  ssr: false,
});

export default function PostForm() {
  return (
    <BlogLayout>
      <FormWrapper>
        <CreatePost />
      </FormWrapper>
    </BlogLayout>
  );
}
