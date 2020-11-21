import {combineReducers} from "redux";
import notificationsReducer  from '../../redux/notifications';

type PropsType = {
  prevState?: any;
  asyncReducers?: any;
};

export const createReducers = ({prevState = {}, asyncReducers}: PropsType): any =>
  combineReducers({...prevState, ...asyncReducers, notificationsReducer});
