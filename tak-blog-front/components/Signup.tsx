import { useForm } from "react-hook-form";
import { Form, Button, Input, Title } from "@/styles/form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import InputError from "./InputError";

type SignupFormInputs = {
  email: string;
  nickname: string;
  password: string;
  passwordConfirm: string;
};

const schema = yup.object().shape({
  email: yup
    .string()
    .email("이메일 양식에 맞춰주십시오")
    .required("이메일을 입력해 주십시오"),
  nickname: yup.string().required("닉네임을 입력해 주십시오"),
  password: yup
    .string()
    .required("비빌번호를 입력해 주십시오")
    .min(8, "비밀번호는 8자 이상 입력해주십시오"),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password")], "비밀번호가 일치하지 않습니다."),
});

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: SignupFormInputs) => {
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Title>Signup</Title>
      <Input
        id="email"
        placeholder="이메일"
        {...register("email", { required: true })}
      />
      <InputError error={errors.email?.message} />
      <Input
        id="nickname"
        placeholder="닉네임"
        {...register("nickname", { required: true })}
      />
      <InputError error={errors.nickname?.message} />
      <Input
        id="password"
        type="password"
        placeholder="비밀번호"
        {...register("password", { required: true })}
      />
      <InputError error={errors.password?.message} />
      <Input
        id="password-confirm"
        type="password"
        placeholder="비밀번호 확인"
        {...register("passwordConfirm", { required: true })}
      />
      <InputError error={errors.passwordConfirm?.message} />
      <Button type="submit">가입하기</Button>
    </Form>
  );
};

export default Signup;
