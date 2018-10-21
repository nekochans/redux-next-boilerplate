import React from "react";
import { IQiitaState } from "../modules/Qiita";

interface IProps {
  value: IQiitaState;
}

const QiitaUser: React.SFC<IProps> = (props: IProps) => {
  return (
    <>
      <p>{props.value.user.id}</p>
      <img src={props.value.user.profile_image_url} />
    </>
  );
};

export default QiitaUser;
