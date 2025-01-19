"use server";
import ImageKit from "imagekit";

const imagekit = new ImageKit({
  publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY!,
  privateKey: process.env.PRIVATE_KEY!,
  urlEndpoint: process.env.NEXT_PUBLIC_URL_ENDPOINT!,
});

export const shareAction = async (formData: FormData, setting: {type: "original" | "wide" | "square"; sensitive: boolean}) => {
  console.log(setting, "setting");
  const file = formData.get("file") as File;

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const transformation = `w-600, ${setting.type === "square" ? "ar-1-1" : setting.type === "wide" ? "ar-16-9" : ""}`

  imagekit.upload({
    file: buffer,
    fileName: file.name,
    folder: "/posts",
    transformation: {
      pre: transformation,
    },
    customMetadata: {
      sensitive: setting.sensitive
    }
  },
  function (error, result) {
    if (error) console.log(error)
        else console.log(result)
})
};
