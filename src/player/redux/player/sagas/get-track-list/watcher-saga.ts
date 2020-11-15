import {take, fork} from "redux-saga/effects";
import {GET_TRACK_LIST_ACTION_SAGA} from "../../actions";
import {getTrackListWorkerSaga} from "./worker-saga";

export const GET_TRACK_LIST_WATCHER_SAGA_NAME = 'GET_TRACK_LIST_WATCHER_SAGA_NAME';

export function* getTrackListWatcherSaga() {
  while (true) {
    yield take(GET_TRACK_LIST_ACTION_SAGA);
    yield fork(getTrackListWorkerSaga);
  }
}
