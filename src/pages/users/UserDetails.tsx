import React from "react";
import { UsersDataModel } from "../../model/usersModel";
import styled from "styled-components";

type UserDetailsModel = {
  onCloseClick: any | null;
  userDetails: UsersDataModel | null;
};

export const UserDetails = ({
  onCloseClick,
  userDetails,
}: UserDetailsModel) => {
  return (
    <BlockedBg>
      <div onClick={onCloseClick}>x</div>
      <Center>
        <div>
          <h1>{userDetails!.firstName}</h1>
        </div>
        <h3>has house? {userDetails!.haveHousing}</h3>
        <h3>Looking for roomate? {userDetails?.lookingForRoommates}</h3>
        <div>
          <button>Connect</button>
        </div>
      </Center>
    </BlockedBg>
  );
};

const BlockedBg = styled.div`
  background-color: #000a;
  width: 100vw;
  height: 100vh;
  position: absolute;
  color: white;
  top: 0;
`;

const Center = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
