import React from "react";
import { useTappedImg } from "../../contexts/TappedImg";
import { IoBookmarkOutline } from "react-icons/io5";
import DownloadButton from "./DownloadButton";
import CopyToClipboard from "../reusable/Copy-to-clipboard";

const PostDetails = () => {
  const { imgData } = useTappedImg();
  return (
    <div className="bg-neutral-50 size-full lg:h-[90vh] lg:w-[80vw] pt-[90px] lg:p-0 lg:flex">
      <div className="w-full h-[50vh] lg:h-full overflow-hidden bg-white flex-1">
        <img
          src={imgData.largeImageURL}
          className="size-full object-contain"
          alt="image"
        />
      </div>
      <div className="*:p-2 flex-[0.6]">
        <div className="flex items-start border-b py-3">
          <DownloadButton />
          <div className="ml-auto flex gap-3">
            <CopyToClipboard />
            <button>
              <IoBookmarkOutline className="text-3xl" />
            </button>
          </div>
        </div>
        {/* user-details */}
        <div className="flex items-center gap-2 border-b">
          <div className="size-[50px] rounded-full overflow-hidden">
            <img src={imgData.userImageURL} alt="" />
          </div>
          <div className="capitalize text-xl">{imgData.user}</div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
