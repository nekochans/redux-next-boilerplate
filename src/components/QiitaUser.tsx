import React from "react";
import { IQiitaState } from "../modules/Qiita";
import styled from "styled-components";

interface IProps {
  value: IQiitaState;
}

const QiitaUserCard = styled("div").attrs({ className: "card" })`
  margin-top: 20px;
`;

const QiitaUser: React.FunctionComponent<IProps> = (props: IProps) => {
  return (
    <>
      <QiitaUserCard>
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                <img
                  src={props.value.user.profile_image_url}
                  alt="Placeholder image"
                />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">{props.value.user.id}</p>
            </div>
          </div>
        </div>
      </QiitaUserCard>
    </>
  );
};

export default QiitaUser;
