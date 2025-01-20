"use client";
import { IKVideo } from "imagekitio-next";

type VideoTypes = {
  path: string;
  className?: string;
};
const Video = ({ path, className }: VideoTypes) => {
  return (
    <IKVideo
      urlEndpoint={process.env.NEXT_PUBLIC_URL_ENDPOINT}
      path={path}
      className={className}
      transformation={[{ width: "1920", height: "1000", q:"90" }, { raw: "l-text,i-LamaDev,fs-100,co-white,l-end" }]}
      controls
    />
  );
};

export default Video;
