import React from "react";

type CreateStepData = {
  icon: string;
  title: string;
  text: string;
  alt: string;
};
export const CreateStep = ({ icon, title, text, alt }: CreateStepData) => {
  return (
    <div className={"flex flex-col items-center "}>
      <img src={icon} width={300} height={300} alt={alt} />
      <h3 className={"text-xl font-bold mt-5"}>{title}</h3>
      <h5 className={"text-lg font-semibold mt-2"}>{text}</h5>
    </div>
  );
};
