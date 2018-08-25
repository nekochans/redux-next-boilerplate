export const UPDATE_ANNOUNCEMENT = "[Announcement] update";

export const updateAnnouncement = (message: string) => dispatch => {
  return dispatch({ type: UPDATE_ANNOUNCEMENT, message });
};
