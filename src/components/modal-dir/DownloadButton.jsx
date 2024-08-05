import React, { useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { useTappedImg } from "../../contexts/TappedImg";
import { BsFiletypeJpg } from "react-icons/bs";

const DownloadButton = () => {
  const [open, setOpen] = useState(false);
  const { imgData } = useTappedImg();

  const downloadImage = async ({ e, url, filename }) => {
    setOpen(false);
    e.stopPropagation();
    const res = await fetch(url);
    const blob = await res.blob();

    const downloadUrl = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <button
        className="bg-green-700 text-white px-3 py-2 rounded"
        onClick={() => setOpen(!open)}
      >
        Download
        {open ? (
          <FaCaretUp className="inline-block ml-2" />
        ) : (
          <FaCaretDown className="inline-block ml-2" />
        )}
      </button>
      <div
        className={`w-[200px] flex items-center px-2 ${
          open ? `h-[100px]` : `h-0`
        } duration-300 overflow-hidden rounded mt-2 bg-gray-200`}
      >
        <ul className="space-y-2">
          <li className="">
            <button
              onClick={(e) =>
                downloadImage({
                  e: e,
                  filename: `${imgData.id}.jpg`,
                  url: imgData.largeImageURL,
                })
              }
            >
              <BsFiletypeJpg className="text-lg inline-block" /> High Quality
            </button>
          </li>
          <li className="">
            <button
              onClick={(e) =>
                downloadImage({
                  e: e,
                  filename: `${imgData.id}.jpg`,
                  url: imgData.webformatURL,
                })
              }
            >
              <BsFiletypeJpg className="text-lg inline-block" /> Medium Quality
            </button>
          </li>
          <li className="">
            <button
              onClick={(e) =>
                downloadImage({
                  e: e,
                  filename: `${imgData.id}.jpg`,
                  url: imgData.previewURL,
                })
              }
            >
              <BsFiletypeJpg className="text-lg inline-block" /> Low Quality
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DownloadButton;
