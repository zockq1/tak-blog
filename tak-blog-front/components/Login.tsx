import { useForm } from "react-hook-form";
import { Form, Button, Input } from "@/styles/form";

type LoginFormInputs = {
  email: string;
  password: string;
};

const Login = () => {
  const { register, handleSubmit } = useForm<LoginFormInputs>();

  const onSubmit = (data: LoginFormInputs) => {
    // 로그인 처리를 수행하는 코드를 작성합니다.
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input
        id="email"
        type="email"
        placeholder="이메일"
        {...register("email", { required: true })}
      />
      <Input
        id="password"
        type="password"
        placeholder="비밀번호"
        {...register("password", { required: true })}
      />
      <Button type="submit">로그인</Button>
    </Form>
  );
};

export default Login;
