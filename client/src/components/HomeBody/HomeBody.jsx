import React from "react";
import tattoo_1 from "../../images/tattoo_1.jpg";
import tattoo_2 from "../../images/tattoo_2.jpg";
// import tattoo_3 from "../../images/tattoo_3.jpg";
import tattoo_4 from "../../images/tattoo_4.jpg";

export default function HomeBody() {
  return (
    <div className="font-gt-america font-bold w-full overflow-hidden ">
      <div className="-mb-10" style={{ fontSize: "17vw" }}>
        Influx
      </div>
      <div className="relative ">
        <div className=" animate-imagefade absolute flex flex-row w-full  place-content-around px-5 bg-white">
          <img className=" object-fit h-128" src={tattoo_1} alt="" srcset="" />
          <img
            className=" object-right object-cover h-128 "
            src={tattoo_4}
            alt=""
            srcset=""
          />
          <img className="object-fit h-128" src={tattoo_2} alt="" srcset="" />
        </div>
        <div className="" style={{ fontSize: "17vw" }}>
          Studio
        </div>
      </div>
    </div>
  );
}
