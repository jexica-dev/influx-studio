import React from "react";
import Nav from "../Nav/Nav";

export default function Layout(props) {
  return (
    <>
      <div className="w-screen h-screen">
        {props.children}
        <Nav />
      </div>
    </>
  );
}
