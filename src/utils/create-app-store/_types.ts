import {Reducer, Store} from "redux";
import { Router } from "router5";

export type AsyncReduxReducers = {
  [name: string]: Reducer;
};

export interface IAppStore extends Store {
  asyncReducers?: AsyncReduxReducers;
  asyncSagas?: AsyncReduxReducers;
  router?: Router;
  sagaMiddleware?: any;
};
