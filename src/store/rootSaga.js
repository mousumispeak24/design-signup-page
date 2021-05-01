import { all } from "redux-saga/effects";
import signupSaga from "../containers/main/state/sagas";
export default function* rootSaga() {
  yield all([signupSaga()] );
}
