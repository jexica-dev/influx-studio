import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="px-3 justify-around w-full fixed bottom-0 pb-5 font-gt-america flex flex-row gap-10 grid-flow-row  font-normal  text-base lg:text-3xl md:text-xl sm:text-base">
      {/*  */}
      <div className="flex flex-row gap-5">
        <div className="hover:underline hover:underline-offset-4 ">
          <Link to="/" exact>
            HOME
          </Link>
        </div>
        <div className="hover:underline hover:underline-offset-4 ">
          <Link>INFO</Link>
        </div>
        <div className="hover:underline hover:underline-offset-4 ">
          <Link>APPOINTMENTS</Link>
        </div>
      </div>
      {/*  */}
      <div className="">217 E HOUSTON ST, NY, NY 10002</div>
      {/*  */}
      <div className="float-right flex flex-row gap-5">
        <div className=" cursor-pointer  hover:underline hover:underline-offset-4">
          IG
        </div>
        <div className=" cursor-pointer  hover:underline hover:underline-offset-4">
          FB
        </div>
        <div className=" cursor-pointer  hover:underline hover:underline-offset-4">
          TW
        </div>
      </div>
      {/*  */}
    </div>
  );
}
