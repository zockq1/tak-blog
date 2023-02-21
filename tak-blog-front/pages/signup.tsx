import BlogLayout from "@/components/BlogLayout";
import { FormWrapper } from "@/styles/form";
import Signup from "../components/Signup";

const SignupPage = () => {
  return (
    <BlogLayout>
      <FormWrapper>
        <Signup />
      </FormWrapper>
    </BlogLayout>
  );
};

export default SignupPage;
