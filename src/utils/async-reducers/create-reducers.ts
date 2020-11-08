import {combineReducers} from "redux";
type PropsType = {
  prevState?: any;
  asyncReducers?: any;
};

export const createReducers = ({prevState = {}, asyncReducers}: PropsType): any =>
  combineReducers({...prevState, ...asyncReducers});
