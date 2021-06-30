import { createReducer } from '@utils';

const initialState = {
  lang: 'en',
};

export const app = createReducer(initialState, {
  ['SWITCH_LANGUAGE'](state, action) {
    return {
      ...state,
      lang: action.payload,
    };
  },
});
