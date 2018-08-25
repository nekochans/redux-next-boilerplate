import { IAnnouncement } from "./state";
import * as announcementActions from "./actions";

const initialState: IAnnouncement = {
  message: "No announcement...",
};

export const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case announcementActions.UPDATE_ANNOUNCEMENT:
      return Object.assign({}, state, {message: action.message});
    default:
      return state;
  }
};
