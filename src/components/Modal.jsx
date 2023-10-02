import React from "react";
import { useShow } from "../contexts/Show";
import { useTappedImg } from "../contexts/TappedImg";

export default function Modal() {
  const { show, setShow } = useShow();
  const { imgData } = useTappedImg();

  const OVERLAY_STYLES = {
    position: "fixed",
    top: "0px",
    left: "0px",
    backgroundColor: "black",
    opacity: "0.1",
    width: "100vw",
    height: "100vh",
  };
  const MODAL_STYLES = {
    position: "fixed",
    top: "50%",
    left: "50%",
    zIndex: "1",
    transform: "translate(-50%, -50%)",
    boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
  };
  const MODAL_CLOSE_BTN_STYLES = {
    position: "absolute",
    right: "0.75rem",
    top: "0.25rem",
    zIndex: "10",
    color: "black",
    fontWeight: "bold",
    width: "1.5rem",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    backgroundColor: "white",
    borderRadius: "2px",
  };
  const MODAL_DWNLD_BTN_STYLES = {
    position: "absolute",
    right: "2.75rem",
    top: "0.25rem",
    zIndex: "10",
    color: "black",
    fontWeight: "bold",
    width: "2rem",
    height: "1.55rem",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    borderRadius: "2px",
    backgroundColor: "white",
  };

  return show ? (
    <>
      <div style={MODAL_STYLES}>
        <img
          src={imgData.largeImageURL}
          alt="loading..."
          className="modal-img"
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
      <div style={OVERLAY_STYLES} onClick={() => setShow(false)} />
    </>
  ) : null;
}
