import BlogLayout from "@/components/BlogLayout";
import { useForm } from "react-hook-form";
import styled from "styled-components";

type LoginFormInputs = {
  email: string;
  password: string;
};

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 80vh;
`;

const LoginForm = styled.form`
  border: 1px solid #eee;
  border-radius: 16px;
  padding: 50px;
  max-width: 400px;
  height: 100%;
`;

const LoginInput = styled.input`
  padding: 12px;
  background-color: #f6f6f6;
  border: 2px solid #f6f6f6;
  border-radius: 16px;
  font-size: 16px;
  color: black;
  margin-top: 10px;
  width: 100%;
  &:focus {
    border-color: #001d66;
  }
  &::placeholder {
    color: grey;
  }
`;

const LoginButton = styled.button`
  padding: 12px;
  background-color: #000;
  border-radius: 16px;
  font-size: 16px;
  color: #fff;
  margin-top: 30px;
  width: 100%;
`;

const LoginPage = () => {
  const { register, handleSubmit } = useForm<LoginFormInputs>();

  const onSubmit = (data: LoginFormInputs) => {
    // 로그인 처리를 수행하는 코드를 작성합니다.
    console.log(data);
  };

  return (
    <BlogLayout>
      <FormWrapper>
        <LoginForm onSubmit={handleSubmit(onSubmit)}>
          <LoginInput
            id="email"
            type="email"
            placeholder="E-mail"
            {...register("email", { required: true })}
          />
          <LoginInput
            id="password"
            type="password"
            placeholder="Password"
            {...register("password", { required: true })}
          />
          <LoginButton type="submit">Login</LoginButton>
        </LoginForm>
      </FormWrapper>
    </BlogLayout>
  );
};

export default LoginPage;
