"use client";

import {
  CldUploadWidget,
  CloudinaryUploadWidgetResults,
} from "next-cloudinary";
import { useState } from "react";

type CldUploadProps = {
  onUploadSuccess: (url: string) => void;
};

const preset = "Chinguunii";

export const CldUpload = ({ onUploadSuccess }: CldUploadProps) => {
  const [image, setImage] = useState("");
  const onUploadImage = (result: CloudinaryUploadWidgetResults) => {
    const info = result.info;
    if (typeof info === "object" && info.secure_url) {
      setImage(info.secure_url);
    }
  };
  console.log("image", image);
  return (
    <CldUploadWidget uploadPreset={preset} onSuccess={onUploadImage}>
      {({ open }) => {
        return (
          <button
            onClick={() => open()}
            className="text-sm border px-3 py-1 rounded-md hover:bg-gray-100"
          >
            Upload Image
          </button>
        );
      }}
    </CldUploadWidget>
  );
};
