import Link from "next/link";
import React from "react";
import Image from "./Image";

const Recommendations = () => {
  return (
    <div className="p-4 rounded-2xl border-[1px] border-broderGray flex flex-col gap-4">
      {/* USER CARD */}
      <div className="flex items-center justify-between">
        {/* IMAGE AND USER INFO */}
        <div className="flex items-center gap-2">
          <div className="relative w-10 h-10 rounded-full overflow-hidden">
            <Image
              path="general/avatar.png"
              alt="john dev"
              w={100}
              h={100}
              tr={true}
            />
          </div>
          <div className="">
            <h1 className="text-md font-bold">John Dov</h1>
            <span className="text-textGray text-sm">@johnDov</span>
          </div>
        </div>
        {/* BUTTON */}
        <button className="py-1 px-4 font-semibold bg-white text-black rounded-full">Follow</button>
      </div>

      <div className="flex items-center justify-between">
        {/* IMAGE AND USER INFO */}
        <div className="flex items-center gap-2">
          <div className="relative w-10 h-10 rounded-full overflow-hidden">
            <Image
              path="general/avatar.png"
              alt="john dev"
              w={100}
              h={100}
              tr={true}
            />
          </div>
          <div className="">
            <h1 className="text-md font-bold">John Dov</h1>
            <span className="text-textGray text-sm">@johnDov</span>
          </div>
        </div>
        {/* BUTTON */}
        <button className="py-1 px-4 font-semibold bg-white text-black rounded-full">Follow</button>
      </div>
        
      <Link href="/" className="text-iconBlue">
        Show More
      </Link>
    </div>
  );
};

export default Recommendations;
