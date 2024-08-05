import React, { useEffect } from "react";
import { useTappedImg } from "../../contexts/TappedImg";
import "./modalStyles.css";
import Loading from "../loaders/Loading";
import { IoArrowBackSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import PostDetails from "./PostDetails";

export default function Modal() {
  const { imgData, setImgData } = useTappedImg();
  const navigate = useNavigate();

  // document.querySelector("body").style.overflow = show ? "hidden" : "visible";
  useEffect(() => {
    if (imgData) document.body.style.overflowY = "hidden";
    return () => (document.body.style.overflowY = "auto");
  }, [imgData]);

  const handleBack = () => {
    navigate(-1);
  };

  return imgData ? (
    <>
      <div className="fixed top-0 left-0 w-full h-full z-10 "></div>
      <div className="overlay fixed top-0 left-0 w-full h-full flex justify-center items-center bg-[rgba(0,0,0,0.3)] z-20 [backdrop-filter:blur(3px)]">
        <button
          className="absolute left-5 lg:left-16 top-[30px] bg-neutral-200 p-2 rounded"
          onClick={handleBack}
        >
          <IoArrowBackSharp className="text-3xl" />
        </button>

        <PostDetails />

        {/* <div className="">
          <img
            src={imgData.largeImageURL}
            alt="loading..."
            className="modal-img w-full h-full max-h-[90vh] max-w-[95vw] md:max-h-[85vh] md:max-w-[85vw]"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute right-16 top-[30px]"
            onClick={() => setShow(false)}
          >
            <span className="material-symbols-outlined text-3xl text-white">
              close
            </span>
          </button>

          <button
            className="absolute right-16 top-[30px] px-1 rounded drop-shadow bg-zinc-800 hover:scale-110 [transition:all,0.3s]"
            onClick={(e) =>
              downloadImage(e, imgData.largeImageURL, `${imgData.id}.jpg`)
            }
          >
            <span className="material-symbols-outlined text-3xl text-white">
              download
            </span>
          </button>
        </div> */}
      </div>
    </>
  ) : (
    <Loading />
  );
}
