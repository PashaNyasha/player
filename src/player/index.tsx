import React from "react";
import {Router} from "router5";
import {RouteNode} from "react-router5";
import {injectAsyncReducers} from "../utils/async-reducers/inject-async-reducers";
import {getMusicActionSaga, playlistReducer, PLAY_LIST_REDUCER_NAME} from "./redux/player";
import {PLAYER_NODE} from "../_constants/page-nodes";
import {injectAsyncSagas} from "../utils/async-sagas/inject-async-sagas";
import {
  getMusicWatcherSaga,
  GET_MUSIC_WATCHER_SAGA_NAME,
} from "./redux/player/sagas/get-music/watcher-saga";
import { IAppStore } from "../utils/create-app-store/_types";
import { ConnectedPlayer } from "./page";

type PropsType = {
  router: Router;
};

export const Page = ({router}: PropsType) => {
  const store: IAppStore = router.getDependencies().store;

  injectAsyncReducers({
    store,
    name: PLAY_LIST_REDUCER_NAME,
    reducer: playlistReducer,
  });

  injectAsyncSagas({
    store,
    name: GET_MUSIC_WATCHER_SAGA_NAME,
    saga: getMusicWatcherSaga,
  });

  store.dispatch(getMusicActionSaga());
  
  return (
    <RouteNode nodeName={PLAYER_NODE}>
      {() => <ConnectedPlayer router={router} />}
    </RouteNode>
  );
};
