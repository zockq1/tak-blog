import BlogLayout from "@/components/BlogLayout";
import { FormWrapper } from "@/styles/form";
import Login from "@/components/Login";

const LoginPage = () => {
  return (
    <BlogLayout>
      <FormWrapper>
        <Login />
      </FormWrapper>
    </BlogLayout>
  );
};

export default LoginPage;
