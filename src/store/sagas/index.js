import { all, takeLatest } from "redux-saga/effects";
// import { signup, login, logout} from "./auth";

export default function* sagaRoot() {
  yield all([
    // takeLatest("SIGN_UP", signup),
    // takeLatest("LOGIN", login),
    // takeLatest("LOGOUT", logout),
  ]);
}
