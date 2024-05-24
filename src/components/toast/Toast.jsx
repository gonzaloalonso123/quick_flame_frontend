import React, { useEffect } from "react";
import { Icon } from "../icons/Icon";
import "./Toast.css"; 

const toast_class = (error) =>
  `p-2 rounded-md pointer-events-auto flex right-12 bottom-12 items-center absolute toast transition-all duration-75 shadow-md border border-l-4 ${
    error ? "border-red-800" : "border-green-800"
  }`;

export const ToastCard = ({ icon, text, close, error }) => {
  const DELAY = 2000;
  useEffect(() => {
    const timeout = setTimeout(() => {
      close();
    }, DELAY);
    return () => {
      clearTimeout(timeout);
    };
  }, [close]);

  return (
    <div className={toast_class(error)}>
      <div className="px-4 border-r flex items-center justify-center">
        <Icon fontSize="24px">
          {icon}
        </Icon>
      </div>
      <h1 className="px-4">{text}</h1>
    </div>
  );
};
