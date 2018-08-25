import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { updateAnnouncement } from "../states/announcement/actions";

interface IProps {
  announcementMessage: string
  updateAnnouncement: any
}

const IndexPage: React.SFC<IProps> = (props: IProps) => {
  const { announcementMessage, updateAnnouncement } = props;

  return (
    <div>
      Announcement: {announcementMessage}
      <button onClick={() => updateAnnouncement('We are closed today!')}>Close!</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  announcementMessage: state.message,
});

const mapDispatchToProps = (dispatch) => ({
  updateAnnouncement: bindActionCreators(updateAnnouncement, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);
