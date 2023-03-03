import produce from "immer";

export const initialState = {
  createPostLoading: false,
  createPostDone: false,
  createPostError: null,
  updatePostLoading: false,
  updatePostDone: false,
  updatePostError: null,
  deletePostLoading: false,
  deletePostDone: false,
  deletePostError: null,
};

export const CREATE_POST_REQUEST = "CREATE_POST_REQUEST";
export const CREATE_POST_SUCCESS = "CREATE_POST_SUCCESS";
export const CREATE_POST_FAILURE = "CREATE_POST_FAILURE";

export const UPDATE_POST_REQUEST = "UPDATE_POST_REQUEST";
export const UPDATE_POST_SUCCESS = "UPDATE_POST_SUCCESS";
export const UPDATE_POST_FAILURE = "UPDATE_POST_FAILURE";

export const DELETE_POST_REQUEST = "DELETE_POST_REQUEST";
export const DELETE_POST_SUCCESS = "DELETE_POST_SUCCESS";
export const DELETE_POST_FAILURE = "DELETE_POST_FAILURE";

const reducer = (state = initialState, action: any) =>
  produce(state, (draft) => {
    switch (action.type) {
      case CREATE_POST_REQUEST:
        draft.createPostLoading = true;
        draft.createPostDone = false;
        draft.createPostError = null;
        break;
      case CREATE_POST_SUCCESS:
        draft.createPostLoading = false;
        draft.createPostDone = true;
        break;
      case CREATE_POST_FAILURE:
        draft.createPostLoading = false;
        draft.createPostError = action.error;
        break;
      case UPDATE_POST_REQUEST:
        draft.updatePostLoading = true;
        draft.updatePostDone = false;
        draft.updatePostError = null;
        break;
      case UPDATE_POST_SUCCESS:
        draft.updatePostLoading = false;
        draft.updatePostDone = true;
        break;
      case UPDATE_POST_FAILURE:
        draft.updatePostLoading = false;
        draft.updatePostError = action.error;
        break;
      case DELETE_POST_REQUEST:
        draft.deletePostLoading = true;
        draft.deletePostDone = false;
        draft.deletePostError = null;
        break;
      case DELETE_POST_SUCCESS:
        draft.deletePostLoading = false;
        draft.deletePostDone = true;
        break;
      case DELETE_POST_FAILURE:
        draft.deletePostLoading = false;
        draft.deletePostError = action.error;
        break;
      default:
        break;
    }
  });

export default reducer;
