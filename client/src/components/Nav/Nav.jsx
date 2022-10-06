import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className=" fixed bottom-0 pb-5 pl-5 font-gt-america flex flex-row gap-10 grid-flow-row  text-3xl font-normal ">
      {/*  */}
      <div className="flex flex-row pr-7">
        <div className="hover:underline hover:underline-offset-4 pr-5">
          <Link to="/" exact>
            HOME
          </Link>
        </div>
        <div className="hover:underline hover:underline-offset-4 pr-5">
          <Link>INFO</Link>
        </div>
        <div className="hover:underline hover:underline-offset-4 pr-5">
          <Link>APPOINTMENTS</Link>
        </div>
      </div>
      {/*  */}
      <div className="pr-5 lg:text-3xl md:text-xl sm:text-normal">
        217 E HOUSTON ST, NY, NY 10002
      </div>
      {/*  */}
      <div className="float-right flex flex-row ">
        <div className=" cursor-pointer pr-5 hover:underline hover:underline-offset-4">
          IG
        </div>
        <div className=" cursor-pointer pr-5 hover:underline hover:underline-offset-4">
          FB
        </div>
        <div className=" cursor-pointer pr-5 hover:underline hover:underline-offset-4">
          TW
        </div>
      </div>
      {/*  */}
    </div>
  );
}
