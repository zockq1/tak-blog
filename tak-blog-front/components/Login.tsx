import { useForm } from "react-hook-form";
import { Form, Button, Input, Title } from "@/styles/form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import InputError from "./InputError";
import { LoginFormInput } from "@/types/auth";
import { useDispatch } from "react-redux";
import { LOG_IN_REQUEST } from "@/reducers/auth";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("이메일 양식에 맞춰주십시오")
    .required("이메일을 입력해 주십시오"),
  password: yup.string().required("비빌번호를 입력해 주십시오"),
});

const Login = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInput>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: LoginFormInput) => {
    // 로그인 처리를 수행하는 코드를 작성합니다.
    dispatch({
      type: LOG_IN_REQUEST,
      payload: data,
    });
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
      <InputError error={errors.email?.message} />
      <Input
        id="password"
        type="password"
        placeholder="비밀번호"
        {...register("password", { required: true })}
      />
      <InputError error={errors.password?.message} />
      <Button type="submit">로그인</Button>
      <Link href="/signup">
        <Button color="black" backgroundColor="white" isBorder={true}>
          회원가입
        </Button>
      </Link>
    </Form>
  );
};

export default Login;
