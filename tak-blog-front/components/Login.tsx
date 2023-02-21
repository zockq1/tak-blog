import { useForm } from "react-hook-form";
import { Form, Button, Input, Title } from "@/styles/form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";

type LoginFormInputs = {
  email: string;
  password: string;
};

const schema = yup.object().shape({
  email: yup
    .string()
    .email("이메일 양식에 맞춰주십시오")
    .required("이메일을 입력해 주십시오"),
  password: yup.string().required("비빌번호를 입력해 주십시오"),
});

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: LoginFormInputs) => {
    // 로그인 처리를 수행하는 코드를 작성합니다.
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Title>Login</Title>
      <Input
        id="email"
        placeholder="이메일"
        {...register("email", { required: true })}
      />
      {errors.email && (
        <span style={{ color: "red", marginTop: 4, fontSize: 14 }}>
          {errors.email.message}
        </span>
      )}
      <Input
        id="password"
        type="password"
        placeholder="비밀번호"
        {...register("password", { required: true })}
      />
      {errors.password && (
        <span style={{ color: "red", marginTop: 4, fontSize: 14 }}>
          {errors.password.message}
        </span>
      )}
      <Button type="submit">로그인</Button>
      <Link href="/signup">
        <Button color="black" bgcolor="white" isBorder={true}>
          회원가입
        </Button>
      </Link>
    </Form>
  );
};

export default Login;
