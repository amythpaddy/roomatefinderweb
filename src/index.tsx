import React from "react";
import ReactDOM from "react-dom/client";
import store from "./store/store";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginSignup from "./pages/login/index";

import "./index.css";
import LoginComponent from "./appBar/loginComponent";
import CreatePost from "./pages/posts/createPost";
import { RoomatePosts } from "./pages/posts/roomatePosts";
import styled from "styled-components";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RoomatePosts />,
  },
  {
    path: "/create_listing",
    element: <CreatePost />,
  },
  {
    path: "/login",
    element: <LoginSignup />,
  },
]);

const Header = styled.header`
  background-color: black;
  color: white;
  display: flex;
  justify-content: space-around;
`;
const NavActionBar = styled.div`
  display: flex;
`;
const AppTitle = styled.h1`
  font-weight: bolder;
  font-size: 20px;
`;

const ActionItem = styled.span`
  font-weight: bold;
  padding: 5px;
  margin: 0 5px;
`;

// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <Header className="App-header">
        <AppTitle>
          <a href={"/"}>Roommate Finder</a>
        </AppTitle>
        <NavActionBar className="App-action-right">
          <ActionItem className="App-action">
            <a href="/create_listing">+</a>
          </ActionItem>
          <LoginComponent />
        </NavActionBar>
      </Header>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log('start measure'));

