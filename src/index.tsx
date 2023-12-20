import React from 'react';
import ReactDOM from 'react-dom/client';
import store from './store/store'
import {Provider} from "react-redux";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {PostsListing} from "./Posts";
import CreateListing from "./CreatePosting";
import LoginSignup from "./pages/login/index";

import './index.css'
import LoginComponent from "./appBar/loginComponent";

const router = createBrowserRouter([
    {
        path: "/",
        element: <PostsListing/>
    },
    {
        path:"/create_listing",
        element:<CreateListing/>
    },
    {
        path:"/login",
        element:<LoginSignup/>
    }
])

// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
    <React.StrictMode>
        <header className="App-header">
          <span>
              <a href={"/"}>Welcome to Roomate Finder</a>
          </span>
            <div className="App-action-right">
                <span className="App-action"><a href="/create_listing">+</a></span>
                <LoginComponent/>
            </div>
        </header>
        <RouterProvider router={router}/>
    </React.StrictMode>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log('start measure'));
