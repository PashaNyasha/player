import {take, fork} from "redux-saga/effects";
import {GET_MUSIC_ACTION_SAGA} from "../../actions";
import {getMusicWorkerSaga} from "./worker-saga";

export const GET_MUSIC_WATCHER_SAGA_NAME = 'GET_MUSIC_WATCHER_SAGA_NAME';

export function* getMusicWatcherSaga() {
  while (true) {
    yield take(GET_MUSIC_ACTION_SAGA);
    yield fork(getMusicWorkerSaga);
  }
}
