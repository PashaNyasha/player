import {Reducer} from "redux";
import {IAppStore} from "../create-app-store/_types";
import {createReducers} from "./create-reducers";

type ParamsType = {
  store: IAppStore;
  name: string;
  reducer: Reducer;
};

export const injectAsyncReducers = ({store, name, reducer}: ParamsType) => {
  const asyncReducers = store.asyncReducers;
  const hasThisReducer = Boolean(asyncReducers && asyncReducers[name]);

  if (hasThisReducer) {
    return;
  }
  if (asyncReducers) {
    asyncReducers[name] = reducer;
    const prevState = store.getState()

    store.replaceReducer(createReducers({ prevState, asyncReducers }));
  }
};
