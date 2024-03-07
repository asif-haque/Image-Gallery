import React from "react";
import { useShow } from "../../contexts/Show";
import { useTappedImg } from "../../contexts/TappedImg";
import "./Modal.css";

export default function Modal() {
  const { show, setShow } = useShow();
  const { imgData } = useTappedImg();

  document.querySelector("body").style.overflow = show ? "hidden" : "visible";

  return (
    show &&
    imgData && (
      <>
        <div className="fixed top-0 left-0 w-full h-full z-10 "></div>
        <div
          className="overlay fixed top-0 left-0 w-full h-full flex justify-center items-center bg-[rgba(0,0,0,0.3)] z-20 [backdrop-filter:blur(3px)]"
          onClick={() => setShow(false)}
        >
          <div className="">
            <img
              src={imgData.largeImageURL}
              alt="loading..."
              className="modal-img w-full h-full max-h-[90vh] max-w-[95vw] md:max-h-[85vh] md:max-w-[85vw]"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="absolute right-[1rem] top-[1rem]"
              onClick={() => setShow(false)}
            >
              <span className="material-symbols-outlined text-3xl">close</span>
            </button>
            <a href={imgData.pageURL} target="_blank">
              <button className="absolute right-[4rem] top-[1rem] px-1 rounded drop-shadow bg-zinc-800 hover:scale-110 [transition:all,0.3s]">
                <span className="material-symbols-outlined text-3xl text-white">
                  download
                </span>
              </button>
            </a>
          </div>
        </div>
      </>
    )
  );
}
