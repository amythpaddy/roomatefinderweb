import React from "react";
import styled from "styled-components";
import { CreateStep } from "./component/steps";

export const Home = () => {
  return (
    <HomeContainer>
      <Center
        className={
          "mt-20 bg-no-repeat flex flex-col lg:mx-60 md:mx-48 sm:mx-20 items-center"
        }
      >
        <WelcomeTitle className={"text-center  w-2/3"}>
          Let's find you a roomie
        </WelcomeTitle>
        <CollegeInputContainer className={"lg:mt-24 md:mt-16 sm:mt-12 "}>
          <CollegeInput
            type={"text"}
            name={"college_name"}
            placeholder={"Search Your College"}
          />
        </CollegeInputContainer>
        <button
          className={
            "mb-52 px-8 text-white py-4 bg-blue-600 text-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm me-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-10"
          }
        >
          Search for Roomies →
        </button>
      </Center>
      {/*<BgImg_1 src={"/images/homepage-bg.svg"} />*/}
      {/*<BgImg_2 src={"/images/homepage-bg-2.svg"} />*/}
      <PageDivider />
      <div className={"flex justify-center"}>
        <h1 className={"h1 text-center text-3xl font-bold"}>
          Find roomies in three
          <br /> easy steps
        </h1>
      </div>

      <div className={"grid grid-cols-3 gap-4 content-center items-center"}>
        <CreateStep
          icon={"/images/create-account.svg"}
          title={"Sign Up"}
          text={"Start by creating an account"}
          alt={"Image for sign up"}
        />
        <CreateStep
          icon={"/images/search.svg"}
          title={"Search"}
          text={"Apply filters as per your preferences and search"}
          alt={"Image for searching room mates"}
        />
        <CreateStep
          icon={"/images/connect.svg"}
          title={"Connect"}
          text={"Start Meeting your new roommates"}
          alt={"Image for connecting with new roommates"}
        />
      </div>
    </HomeContainer>
  );
};

const WelcomeTitle = styled.span`
  margin-top: 50px;
  background: #58c1de;
  background: linear-gradient(135deg, #58c1de, #4977ff);
  background-clip: border-box;
  -webkit-background-clip: text;
  font-size: 44px;
  font-weight: 850;
  -webkit-text-fill-color: transparent;
`;

const CollegeInputContainer = styled.div`
  border: 2px solid black;
  width: 50%;
  border-radius: 5px;
  padding: 10px;
`;

const CollegeInput = styled.input`
  width: 100%;

  &:focus {
    outline: none;
  }
`;

const BgImg_1 = styled.img`
  position: absolute;
  top: 100px;
  left: 30px;
  width: 300px;
  height: 300px;
  z-index: -1;
`;

const BgImg_2 = styled.img`
  position: absolute;
  right: 10px;
  top: 300px;
  height: 250px;
  width: 250px;
  z-index: -1;
`;

const PageDivider = styled.div`
  width: 55%;
  height: 9px;
  border-radius: 10px;
  background-color: #eff3ff;
  margin: 60px auto;
`;

const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  flex-direction: column;
`;

const Center = styled.div`
  background-image: url("/images/homepage-bg.svg");
  background-size: 100% 650px;
`;
