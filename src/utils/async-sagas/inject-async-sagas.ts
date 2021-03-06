import {Saga} from "redux-saga";
import {IAppStore} from "../create-app-store/_types";

type ParamsType = {
  store: IAppStore;
  name: string;
  saga: Saga;
};

export const injectAsyncSagas = ({store, name, saga}: ParamsType) => {
  const wasThisSagaInjected = Boolean(
    store.asyncSagas && store.asyncSagas[name]
  );

  if (wasThisSagaInjected) {
    return;
  }

  const {
    dispatch,
    router,
    asyncSagas,
    sagaMiddleware: {run},
  } = store;

  if (asyncSagas) {
    const newSaga = run(saga, {router, dispatch});
    asyncSagas[name] = newSaga;
  }
};
