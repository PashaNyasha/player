import React from "react";
import {Router} from "router5";
import {RouteNode} from "react-router5";
import {injectAsyncReducers} from "../utils/async-reducers/inject-async-reducers";
import trackListReducer, {
  getTrackListActionSaga,
  TRACK_LIST_REDUCER_NAME,
} from "./redux/player";
import {PLAYER_NODE} from "../_constants/page-nodes";
import {injectAsyncSagas} from "../utils/async-sagas/inject-async-sagas";
import {
  getTrackListWatcherSaga,
  GET_TRACK_LIST_WATCHER_SAGA_NAME,
} from "./redux/player/sagas/get-track-list/watcher-saga";
import {IAppStore} from "../utils/create-app-store/_types";
import {ConnectedPlayer} from "./page";

type PropsType = {
  router: Router;
};

export const Page = ({router}: PropsType) => {
  const store: IAppStore = router.getDependencies().store;

  injectAsyncReducers({
    store,
    name: TRACK_LIST_REDUCER_NAME,
    reducer: trackListReducer,
  });

  injectAsyncSagas({
    store,
    name: GET_TRACK_LIST_WATCHER_SAGA_NAME,
    saga: getTrackListWatcherSaga,
  });

  store.dispatch(getTrackListActionSaga());

  return (
    <RouteNode nodeName={PLAYER_NODE}>
      {() => <ConnectedPlayer router={router} />}
    </RouteNode>
  );
};
