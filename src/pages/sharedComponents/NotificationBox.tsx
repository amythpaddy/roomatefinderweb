import React from "react";
import styled from "styled-components";

type NotificationBoxParams = {
  title: string;
  message?: string;
  error: boolean;
};
const NotificationBox = ({ title, message, error }: NotificationBoxParams) => {
  return (
    <StickyBottom>
      <div
        className={
          error
            ? "bg-red-900 text-center py-4 lg:px-4"
            : "bg-indigo-900 text-center py-4 lg:px-4"
        }
      >
        <div
          className={
            error
              ? "p-2 bg-red-400 items-center text-red-100 leading-none lg:rounded-full flex lg:inline-flex"
              : "p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex"
          }
          role="alert"
        >
          <span
            className={
              error
                ? "flex rounded-full bg-red-500 uppercase px-2 py-1 text-xs font-bold mr-3"
                : "flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3"
            }
          >
            {title}
          </span>
          <span className="font-semibold mr-2 text-left flex-auto">
            {message}
          </span>
          <svg
            className="fill-current opacity-75 h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
          </svg>
        </div>
      </div>
    </StickyBottom>
  );
};

const StickyBottom = styled.div`
  position: sticky;
  bottom: 0;
`;
export default NotificationBox;
