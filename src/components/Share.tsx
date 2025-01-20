"use client";
import React, { useState } from "react";
import Image from "./Image";
import NextImage from "next/image";
import { shareAction } from "@/actions";
import ImageEditor from "./ImageEditor";

export default function Share() {
  const [media, setMedia] = useState<File | null>(null);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [setting, setSetting] = useState<{
    type: "original" | "wide" | "square";
    sensitive: boolean;
  }>({
    type: "original",
    sensitive: false,
  });

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files?.[0]) {
      setMedia(e.target.files?.[0]);
      console.log(media, "media");
    }
  };

  const previewImg = media ? URL.createObjectURL(media) : null;
  return (
    <form className="p-4 flex gap-4" action={(formData) => shareAction(formData, setting)}>
      {/* AVATAR */}
      <div className="w-10 h-10 relative rounded-full overflow-hidden">
        <Image
          path="/general/avatar.png"
          alt="lama dev"
          w={100}
          h={100}
          tr={true}
        />
      </div>
      {/* OTHERS */}
      <div className="flex-1 flex flex-col gap-4">
        <input
          type="text"
          name="desc"
          placeholder="What is happening"
          className="bg-transparent outline-none placeholder:text-textGray"
        />
        {media?.type.includes("image") && previewImg && (
          <div className="rounded-xl overflow-hidden relative">
            <NextImage
              src={previewImg}
              alt=""
              width={600}
              height={600}
              className={`w-full ${
                setting.type === "original"
                  ? "h-full object-contain"
                  : setting.type === "square"
                  ? "aspect-square object-cover"
                  : "aspect-video object-cover"
              }`}
            />
            <div
              className="absolute top-2 left-2 bg-black bg-opacity-50 font-bold text-sm text-white rounded-full py-1 px-4 cursor-pointer"
              onClick={() => setIsEditorOpen(true)}
            >
              Edit
            </div>
            <div className="absolute top-2 right-2 bg-black bg-opacity-50 font-bold text-sm w-8 h-8 text-white flex items-center justify-center rounded-full cursor-pointer" onClick={() => setMedia(null)}>X</div>
          </div>
        )}
        {
          media?.type.includes("video") && previewImg && (
            <div className="relative">
              <video
                src={previewImg}
                controls
                // width={600}
                // height={600}
                // className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2 bg-black bg-opacity-50 font-bold text-sm w-8 h-8 text-white flex items-center justify-center rounded-full cursor-pointer" onClick={() => setMedia(null)}>X</div>
            </div>
          )
        }
        {isEditorOpen && previewImg && (
          <ImageEditor
            onClose={() => setIsEditorOpen(false)}
            previewImg={previewImg}
            setting={setting}
            setSetting={setSetting}
          />
        )}
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div className="flex gap-4 flex-wrap">
            <input
              type="file"
              name="file"
              className="hidden"
              onChange={handleImageUpload}
              id="file"
              accept="image/*, video/*"
            />
            <label htmlFor="file">
              <Image
                path="icons/image.svg"
                alt=""
                w={20}
                h={20}
                className="cursor-pointer"
              />
            </label>
            <Image
              path="icons/gif.svg"
              alt=""
              w={20}
              h={20}
              className="cursor-pointer"
            />
            <Image
              path="icons/poll.svg"
              alt=""
              w={20}
              h={20}
              className="cursor-pointer"
            />
            <Image
              path="icons/emoji.svg"
              alt=""
              w={20}
              h={20}
              className="cursor-pointer"
            />
            <Image
              path="icons/schedule.svg"
              alt=""
              w={20}
              h={20}
              className="cursor-pointer"
            />
            <Image
              path="icons/location.svg"
              alt=""
              w={20}
              h={20}
              className="cursor-pointer"
            />
          </div>
          <button className="bg-white text-black font-bold rounded-full py-2 px-4">
            Post
          </button>
        </div>
      </div>
    </form>
  );
}
