import React from "react";
import styled from "styled-components";
import { UsersDataModel } from "../../model/usersModel";
import Avvvatars from "avvvatars-react";
import { useNavigate } from "react-router";

type DisplayPostData = {
  title: string;
  message: string;
  userdata: UsersDataModel;
};
export const DisplayPost = ({ title, message, userdata }: DisplayPostData) => {
  const navigate = useNavigate();
  return (
    <Container>
      <AvatarContainer>
        <Avvvatars value={userdata.firstName ?? ""} size={42} />
      </AvatarContainer>
      <div>
        <Title>{title}</Title>
        <Message>{message}</Message>
      </div>
    </Container>
  );
};

const Container = styled.div`
  border: 1px cadetblue;
  border-radius: 5px;
  background-color: lemonchiffon;
  margin: 15px 15%;
  padding: 10px;
  display: flex;
`;

const AvatarContainer = styled.div`
  margin: 0 10px;
`;

const Title = styled.h1`
  font-weight: bolder;
  color: darkgoldenrod;
`;

const Message = styled.h3`
  font-weight: bold;
  color: burlywood;
`;
