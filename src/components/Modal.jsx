import React from "react";
import { useShow } from "../contexts/Show";
import { useTappedImg } from "../contexts/TappedImg";
import { useEffect } from "react";

export default function Modal() {
  const { show, setShow } = useShow();
  const { imgData } = useTappedImg();

  const OVERLAY_STYLES = {
    position: "fixed",
    top: "0px",
    left: "0px",
    backgroundColor: "black",
    opacity: "0.2",
    width: "100vw",
    height: "100vh",
  };
  const MODAL_STYLES = {
    position: "fixed",
    top: "50%",
    left: "50%",
    zIndex: "10",
    width: "100%",
    transform: "translate(-50%, -50%)",
  };
  const MODAL_CLOSE_BTN_STYLES = {
    position: "absolute",
    right: "1rem",
    top: "1rem",
  };
  const MODAL_DWNLD_BTN_STYLES = {
    position: "absolute",
    right: "3rem",
    top: "1rem",
    color: "black",
    fontWeight: "bold",
    width: "2rem",
    height: "1.55rem",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    borderRadius: "2px",
    backgroundColor: "white",
  };

  document.querySelector("body").style.overflow = show ? "hidden" : "visible";

  const handleClick = () => setShow(false);

  // useEffect(() => {
  //   document
  //     .querySelector(".modal-img")
  //     .addEventListener("click", handleClick, false);

  // }, []);

  return show && imgData ? (
    <>
      {/* <div style={MODAL_STYLES}>
        <img
          src={imgData.largeImageURL}
          alt="loading..."
          className="modal-img w-full h-full max-h-[90vh] max-w-[95vw]"
        />
        <button style={MODAL_CLOSE_BTN_STYLES} onClick={() => setShow(false)}>
          x
        </button>
        <a href={imgData.pageURL} target="_blank">
          <button style={MODAL_DWNLD_BTN_STYLES}>
            <span className="material-symbols-outlined ">download</span>
          </button>
        </a>
      </div>
      <div style={OVERLAY_STYLES} onClick={() => setShow(false)} /> */}
      <div
        className="overlay fixed top-0 left-0 w-full h-full flex justify-center items-center bg-[rgba(0,0,0,0.4)] z-10"
        onClick={handleClick}
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
              <span className="material-symbols-outlined text-3xl text-white">download</span>
            </button>
          </a>
        </div>
      </div>
    </>
  ) : null;
}
