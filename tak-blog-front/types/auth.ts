export interface LoginFormInput {
  email: string;
  password: string;
}

export interface SignupFormInputs {
  email: string;
  nickname: string;
  password: string;
  passwordConfirm: string;
}

export interface LoginAction {
  type: "LOG_IN_REQUEST";
  payload: LoginFormInput;
}

export interface SignupAction {
  type: "SIGN_IN_REQUEST";
  payload: SignupFormInputs;
}
