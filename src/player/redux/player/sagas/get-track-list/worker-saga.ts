import {batchActions} from "redux-batched-actions";
import {call, put} from "redux-saga/effects";
import {GetMusic} from "../../../../../services/get-music";
import {
  setBackgroundAction,
  setCoverAction,
  setTracklistAction,
  startLoadingTrackListAction,
  stopLoadingTrackListAction,
} from "../../actions";

export function* getTrackListWorkerSaga() {
  try {
    yield put(startLoadingTrackListAction());

    const getMusic = new GetMusic({serverPort: 8082});

    const {
      album: {trackList, cover, background},
    } = yield call(getMusic.getRequest);

    yield put(
      batchActions([
        setTracklistAction(trackList),
        setCoverAction(cover),
        setBackgroundAction(background),
      ])
    );
  } catch (error) {
    console.error("Error in getMusicWorkerSaga", error.message);
  } finally {
    yield put(stopLoadingTrackListAction());
  }
}
