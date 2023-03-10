import produce from "immer";

export const initialState = {
  logInLoading: false, // 로그인 시도중
  logInDone: false,
  logInError: null,
  logOutLoading: false, // 로그아웃 시도중
  logOutDone: false,
  logOutError: null,
  signUpLoading: false, // 회원가입 시도중
  signUpDone: false,
  signUpError: null,
  authCheckLoading: false,
  authCheckDone: false,
  authCheckError: null,
  isLoggedIn: false,
  role: "user",
};

export const LOG_IN_REQUEST = "LOG_IN_REQUEST";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_FAILURE = "LOG_IN_FAILURE";

export const LOG_OUT_REQUEST = "LOG_OUT_REQUEST";
export const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";
export const LOG_OUT_FAILURE = "LOG_OUT_FAILURE";

export const SIGN_UP_REQUEST = "SIGN_UP_REQUEST";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";

export const AUTH_CHECK_REQUEST = "SIGN_UP_REQUEST";
export const AUTH_CHECK_SUCCESS = "SIGN_UP_SUCCESS";
export const AUTH_CHECK_FAILURE = "SIGN_UP_FAILURE";

const reducer = (state = initialState, action: any) =>
  produce(state, (draft) => {
    switch (action.type) {
      case LOG_IN_REQUEST:
        draft.logInLoading = true;
        draft.logInError = null;
        draft.logInDone = false;
        break;
      case LOG_IN_SUCCESS:
        draft.logInLoading = false;
        draft.isLoggedIn = true;
        draft.logInDone = true;
        draft.role = action.payload.data.role;
        break;
      case LOG_IN_FAILURE:
        draft.logInLoading = false;
        draft.logInError = action.error;
        break;
      case LOG_OUT_REQUEST:
        draft.logOutLoading = true;
        draft.logOutError = null;
        draft.logOutDone = false;
        break;
      case LOG_OUT_SUCCESS:
        draft.logOutLoading = false;
        draft.logOutDone = true;
        draft.isLoggedIn = false;
        draft.role = "user";
        break;
      case LOG_OUT_FAILURE:
        draft.logOutLoading = false;
        draft.logOutError = action.error;
        break;
      case SIGN_UP_REQUEST:
        draft.signUpLoading = true;
        draft.signUpError = null;
        draft.signUpDone = false;
        break;
      case SIGN_UP_SUCCESS:
        draft.signUpLoading = false;
        draft.signUpDone = true;
        break;
      case SIGN_UP_FAILURE:
        draft.signUpLoading = false;
        draft.signUpError = action.error;
        break;
      case AUTH_CHECK_REQUEST:
        draft.authCheckLoading = true;
        draft.authCheckError = null;
        draft.authCheckDone = false;
        break;
      case AUTH_CHECK_SUCCESS:
        draft.authCheckLoading = false;
        draft.authCheckDone = true;
        draft.isLoggedIn = true;
        draft.role = action.payload.data.role;
        break;
      case AUTH_CHECK_FAILURE:
        draft.authCheckLoading = false;
        draft.authCheckError = action.error;
        break;
      default:
        break;
    }
  });

export default reducer;
