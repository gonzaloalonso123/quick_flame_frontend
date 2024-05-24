import React, { useContext, useRef, useState } from "react";
import { Header } from "../components/Header";
import "./Page.css";

export const Page = ({ children }) => {
  return (
    <div className="flex w-screen h-screen overflow-hidden">
      <SideNav />
      <div className="flex flex-col w-full">
        <Header />
        <div className="h-full" ref={ref}>
          {children}
        </div>
      </div>
    </div>
  );
};
