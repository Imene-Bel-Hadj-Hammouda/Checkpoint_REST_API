import {
  ADD_USER_FAILED,
  ADD_USER_LOADING,
  ADD_USER_SUCCESS,
  DELETE_USERS_FAILED,
  DELETE_USERS_LOADING,
  DELETE_USERS_SUCCESS,
  EDIT_USER_SUCCESS,
  GET_USERS_FAILED,
  GET_USERS_LOADING,
  GET_USERS_SUCCESS,
} from "../actions/types";

const initState = {
  users: [],
  errors: null,
  isLoading: false,
};
const usersReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_USERS_SUCCESS:
      return {
        ...state,
        users: payload,
        isLoading: false,
        errors: false,
      };
    case DELETE_USERS_SUCCESS:
      return {
        ...state,
        users: state.users.filter((user) => user._id !== payload._id),
        isLoading: false,
        errors: false,
      };
    case ADD_USER_SUCCESS:
      return {
        ...state,
        users: [...state.users, payload],
        isLoading: false,
        errors: false,
      };
    case EDIT_USER_SUCCESS:
      console.log(payload);
      return {
        ...state,
        isLoading: false,
        errors: false,
        users: state.users.map((user) =>
          user._id === payload._id ? payload : user
        ),
      };

    case ADD_USER_FAILED:
    case DELETE_USERS_FAILED:
    case GET_USERS_FAILED:
      return {
        ...state,
        isLoading: false,
        errors: payload,
      };
    case ADD_USER_LOADING:
    case DELETE_USERS_LOADING:
    case GET_USERS_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    default:
      return state;
  }
};

export default usersReducer;
