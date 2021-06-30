 import { createReducer } from '@utils';

const initialState = {
  startApp: true,
  isLoadingButton: false,
  isLoadingRoot : false,
  contentError : '',
};

export const loading = createReducer(initialState, {
  ['LOADING_APP'](state, action) {
    return {
      ...state,
      startApp: false,
    };
  },
  ['START_LOADING_BUTTON'](state) {
    return {
      ...state,
      isLoadingButton: true,
    };
  },
  ['STOP_LOADING_BUTTON'](state) {
    return {
      ...state,
      isLoadingButton: false,
    };
  },
  ['START_LOADING_ROOT'](state) {
    return {
      ...state,
      isLoadingRoot: true,
    };
  },
  ['STOP_LOADING_ROOT'](state) {
    return {
      ...state,
      isLoadingRoot: false,
    };
  },
  ['SET_CONTENT_ERROR'](state,action) {
    return {
      ...state,
      contentError: action.content,
    };
  },
});



