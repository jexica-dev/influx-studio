import React from "react";
import tattoo_1 from "../../images/tattoo_1.jpg";
import tattoo_2 from "../../images/tattoo_2.jpg";
import tattoo_3 from "../../images/tattoo_3.jpg";
import tattoo_4 from "../../images/tattoo_4.jpg";

export default function HomeBody() {
  use;
  return (
    <div className="font-gt-america font-bold w-full overflow-hidden px-5">
      <div className=" leading-relaxed opacity-0 lg:opacity-100 lg:text-[250px] md:opacity-100 md:text-[170px] sm:opacity-0 tracking-widest justify-center -mb-20">
        INFLUX
      </div>

      <div className="relative ">
        <div className=" animate-imagefade absolute flex flex-row w-full  place-content-around px-5 bg-white">
          <img className="  object-fit h-128" src={tattoo_1} alt="" srcset="" />
          <img
            className=" object-right object-cover w-140 h-128 "
            src={tattoo_4}
            alt=""
            srcset=""
          />
          <img className=" object-fit h-128" src={tattoo_3} alt="" srcset="" />
        </div>
        <div className="leading-relaxed opacity-0 lg:opacity-100 lg:text-[250px] md:opacity-100 md:text-[170px] sm:opacity-0 tracking-widest justify-center">
          STUDIO
        </div>
      </div>
    </div>
  );
}
