import {applyMiddleware, createStore} from "redux";
import {Router} from "router5";
import {enableBatching, batchDispatchMiddleware} from "redux-batched-actions";
import createSagaMiddleware from "redux-saga";
import {createReducers} from "../async-reducers/create-reducers";
import {IAppStore} from "./_types";

type ParamsType = {
  router: Router;
};

export const createAppStore = ({router}: ParamsType): IAppStore => {
  const sagaMiddleware = createSagaMiddleware();

  const composeMiddlewares = [batchDispatchMiddleware, sagaMiddleware];

  const store: IAppStore = createStore(
    enableBatching(createReducers({})),
    applyMiddleware(...composeMiddlewares),
  );

  store.asyncReducers = {};
  store.asyncSagas = {};
  store.router = router;
  store.sagaMiddleware = sagaMiddleware;

  return store;
};
