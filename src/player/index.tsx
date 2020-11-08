import React from "react";
import {Router} from "router5";
import {RouteNode} from "react-router5";
import {injectAsyncReducers} from "../utils/async-reducers/inject-async-reducers";
import {playlistReducer, PLAY_LIST_REDUCER_NAME} from "./redux/player";
import {ConnectedPlayer} from "./_components";
import { PLAYER_NODE } from "../_constants/page-nodes";

type PropsType = {
  router: Router;
};

export const Page = ({ router }: PropsType) => {
  const {store} = router.getDependencies();

  injectAsyncReducers({
    store,
    name: PLAY_LIST_REDUCER_NAME,
    reducer: playlistReducer,
  });

  return (
    <RouteNode nodeName={PLAYER_NODE}>
      {() => <ConnectedPlayer router={router} />}
    </RouteNode>
  );
};
