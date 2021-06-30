import { createReducer } from '@utils';

const initialState = {
  staffInfo: '',
  isLogin: false
};

export const auth = createReducer(initialState, {
  ['SET_INFO_LOGIN'](state, action) {
    return {
      ...state,
      staffInfo: action.payload,
    };
  },
  ['LOGIN'](state) {
    return {
      ...state,
      isLogin: true,
    };
  },
  ['LOGOUT'](state) {
    return {
      ...state,
      isLogin: false,
    };
  },
  ['UNAUTHORIZE'](state) {
    return {
      ...state,
      isLogin: false,
    };
  },
});

