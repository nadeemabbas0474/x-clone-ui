import Feed from "@/components/Feed";
import Image from "@/components/Image";
import Link from "next/link";
import React from "react";

const userPage = () => {
  return (
    <div className="">
      {/* PROFILE TITLE */}
      <div className="flex items-center gap-8 sticky top-0 backdrop-blur-md bg-[#00000084] p-2 z-10">
        <Link href="/">
          <Image path="icons/back.svg" alt="back" w={24} h={24} />
        </Link>
        <h1 className="font-bold text-lg">Lama Dev</h1>
      </div>
      {/* INFO */}
      <div className="">
        {/* COVER & AVATAR CONATINER */}
        <div className="relative w-full">
          {/* COVER */}
          <div className="w-full aspect-[3/1] relative">
            <Image path="general/cover.jpg" alt="" w={600} h={200} tr={true} />
          </div>
          {/* AVATAT */}
          <div className="w-1/5 aspect-square rounded-full overflow-hidden border-4 border-black absolute left-4 -translate-y-1/2">
            <Image path="general/avatar.png" alt="" w={100} h={100} tr={true} />
          </div>
        </div>
        <div className="flex items-center justify-end w-full gap-2 p-2">
          <div className="w-9 h-9 rounded-full flex items-center justify-center border-[1px] border-gray-500 cursor-pointer">
            <Image path="icons/more.svg" alt="more" w={20} h={20} />
          </div>
          <div className="w-9 h-9 rounded-full flex items-center justify-center border-[1px] border-gray-500 cursor-pointer">
            <Image path="icons/explore.svg" alt="more" w={20} h={20} />
          </div>
          <div className="w-9 h-9 rounded-full flex items-center justify-center border-[1px] border-gray-500 cursor-pointer">
            <Image path="icons/message.svg" alt="more" w={20} h={20} />
          </div>
          <button className="py-2 px-4 font-bold bg-white text-black rounded-full">
            Follow
          </button>
        </div>
        {/* USER DETAILS */}
        <div className="p-4 flex flex-col gap-2">
          {/* USERNAME & HANDLE */}
          <div className="">
            <h1 className="text-2xl font-bold">Lama Dev</h1>
            <span className="text-textGray text-sm">@lamaWebDev</span>
          </div>
          <p>Lama Dev Youtube Channel</p>
          {/* JOB & LOCATION & DATE */}
          <div className="flex gap-4 text-[15px] text-textGray">
            <div className="flex items-center gap-2">
              <Image
                path="icons/userLocation.svg"
                alt="Location"
                w={20}
                h={20}
              />
              <span>USA</span>
            </div>
            <div className="flex items-center gap-2">
              <Image
                path="icons/date.svg"
                alt="date"
                w={20}
                h={20}
              />
              <span>Joined May 2025</span>
            </div>
          </div>
          {/* FOLLOWINGS & FOLLOWERS */}
        <div className="flex gap-4">
            <div className="flex items-center gap-2">
                <span className="font-bold">100</span>
                <span className="text-textGray text-[15px]">Follower</span>
            </div>
            
            <div className="flex items-center gap-2">
                <span className="font-bold">100</span>
                <span className="text-textGray text-[15px]">Followings</span>
            </div>
        </div>
        </div>
      </div>
      {/* FEED */}
      <Feed />
    </div>
  );
};

export default userPage;
