import {batchActions} from "redux-batched-actions";
import {call, put} from "redux-saga/effects";
import {GetMusic} from "../../../../../services/get-music";
import {
  setCoverAction,
  setPlaylistAction,
  startLoadingPlayListAction,
  stopLoadingPlayListAction,
} from "../../actions";

export function* getMusicWorkerSaga() {
  try {
    yield put(startLoadingPlayListAction());

    const getMusic = new GetMusic({serverPort: 8082});

    const {
      album: {trackList, cover},
    } = yield call(getMusic.getRequest);

    yield put(
      batchActions([setPlaylistAction(trackList), setCoverAction(cover)])
    );
  } catch (error) {
    console.error("Error in getMusicWorkerSaga", error.message);
  } finally {
    yield put(stopLoadingPlayListAction());
  }
}
