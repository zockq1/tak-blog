import {
  CreatePostAction,
  DeletePostAction,
  CreatePostForm,
  UpdatePostForm,
  UpdatePostAction,
} from "@/types/post";
import axios from "axios";
import { all, fork, put, takeLatest, throttle, call } from "redux-saga/effects";

import {
  CREATE_POST_FAILURE,
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  DELETE_POST_FAILURE,
  DELETE_POST_REQUEST,
  DELETE_POST_SUCCESS,
  UPDATE_POST_FAILURE,
  UPDATE_POST_REQUEST,
  UPDATE_POST_SUCCESS,
} from "../reducers/post";

function createPostAPI(data: CreatePostForm) {
  const accessToken = localStorage.getItem("accessToken");
  return axios.post("/post", data, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
}

function* createPost(action: CreatePostAction) {
  try {
    const result: string = yield call(createPostAPI, action.payload);
    yield put({
      type: CREATE_POST_SUCCESS,
    });
  } catch (err: any) {
    console.error(err);
    yield put({
      type: CREATE_POST_FAILURE,
      error: err.response.data,
    });
  }
}

function updatePostAPI(data: UpdatePostForm) {
  return axios.patch(`/post/${data.postId}`, data);
}

function* updatePost(action: UpdatePostAction) {
  try {
    const result: string = yield call(updatePostAPI, action.payload);
    console.log(result);
    yield put({
      type: UPDATE_POST_SUCCESS,
    });
  } catch (err: any) {
    console.error(err);
    yield put({
      type: UPDATE_POST_FAILURE,
      error: err.response.data,
    });
  }
}

function deletePostAPI(data: number) {
  return axios.delete(`/post/${data}`);
}

function* deletePost(action: DeletePostAction) {
  try {
    const result: string = yield call(deletePostAPI, action.payload);
    console.log(result);
    yield put({
      type: DELETE_POST_SUCCESS,
    });
  } catch (err: any) {
    console.error(err);
    yield put({
      type: DELETE_POST_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchAddPost() {
  yield takeLatest(CREATE_POST_REQUEST, createPost);
}

function* watchUpdatePost() {
  yield takeLatest(UPDATE_POST_REQUEST, updatePost);
}

function* watchRemovePost() {
  yield takeLatest(DELETE_POST_REQUEST, deletePost);
}

export default function* postSaga() {
  yield all([fork(watchAddPost), fork(watchUpdatePost), fork(watchRemovePost)]);
}
