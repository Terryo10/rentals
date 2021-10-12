import { combineReducers } from "redux";
import AuthReducer from "../reducers/auth_reducer";
import SidebarReducer from "../reducers/side_bar_reducer";
import NotificationReducer from "../reducers/notification_reducer";

const RootReducer = combineReducers({
  auth: AuthReducer,
  sideBar:SidebarReducer,
  notification:NotificationReducer,
});

export default RootReducer;
