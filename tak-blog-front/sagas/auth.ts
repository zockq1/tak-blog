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
  AUTH_CHECK_FAILURE,
  AUTH_CHECK_REQUEST,
  AUTH_CHECK_SUCCESS,
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
    const role: string = yield call(logInAPI, action.payload);
    console.log("로그인 성공; ", role);
    yield put({
      type: LOG_IN_SUCCESS,
      payload: role,
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
    const result: string = yield call(signUpAPI, action.payload);
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

function authCheckAPI() {
  const accessToken = localStorage.getItem("accessToken");
  return axios.post("/auth/signup");
}

function* authCheck(action: SignupAction) {
  try {
    const role: string = yield call(authCheckAPI);
    yield put({
      type: AUTH_CHECK_SUCCESS,
      payload: role,
    });
  } catch (err: any) {
    console.error(err);
    yield put({
      type: AUTH_CHECK_FAILURE,
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

function* watchAuthCheck() {
  yield takeLatest(AUTH_CHECK_REQUEST, authCheck);
}

export default function* userSaga() {
  yield all([
    fork(watchLogIn),
    fork(watchLogOut),
    fork(watchSignUp),
    fork(watchAuthCheck),
  ]);
}
