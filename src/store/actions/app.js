export function startUp() {
  return {
    type: 'LOADING_APP',
  };
}

export function startLoading() {
  return {
    type: 'START_LOADING_ROOT',
  };
}

export function stopLoading() {
  return {
    type: 'STOP_LOADING_ROOT',
  };
}

export function switchLanguage(lang) {
  return {
    type: 'SWITCH_LANGUAGE',
    payload: lang,
  };
}
