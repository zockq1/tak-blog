import { all, fork, put, takeLatest, call } from "redux-saga/effects";
import axios from "axios";

import {
  LOG_IN_FAILURE,
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_OUT_FAILURE,
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
} from "../reducers/auth";
import {
  LoginAction,
  LoginFormInput,
  SignupAction,
  SignupFormInputs,
} from "@/types/auth";

function logInAPI(data: LoginFormInput) {
  return axios.post("/auth/login", data);
}

function* logIn(action: LoginAction) {
  try {
    const token: string = yield call(logInAPI, action.data);
    console.log(token); ////
    yield put({
      type: LOG_IN_SUCCESS,
      data: token,
    });
  } catch (err: any) {
    console.error(err);
    yield put({
      type: LOG_IN_FAILURE,
      error: err.response.data,
    });
  }
}

function logOutAPI() {
  return axios.post("/auth/logout");
}

function* logOut() {
  try {
    yield call(logOutAPI);
    yield put({
      type: LOG_OUT_SUCCESS,
    });
  } catch (err: any) {
    console.error(err);
    yield put({
      type: LOG_OUT_FAILURE,
      error: err.response.data,
    });
  }
}

function signUpAPI(data: SignupFormInputs) {
  return axios.post("/auth/signup", data);
}

function* signUp(action: SignupAction) {
  try {
    const result: string = yield call(signUpAPI, action.data);
    console.log(result); ////
    yield put({
      type: SIGN_UP_SUCCESS,
    });
  } catch (err: any) {
    console.error(err);
    yield put({
      type: SIGN_UP_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchLogIn() {
  yield takeLatest(LOG_IN_REQUEST, logIn);
}

function* watchLogOut() {
  yield takeLatest(LOG_OUT_REQUEST, logOut);
}

function* watchSignUp() {
  yield takeLatest(SIGN_UP_REQUEST, signUp);
}

export default function* userSaga() {
  yield all([fork(watchLogIn), fork(watchLogOut), fork(watchSignUp)]);
}
