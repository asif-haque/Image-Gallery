import SearchBar from "./components/SearchBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { SearchTermProvider } from "./contexts/SearchTerm";
import Modal from "./components/Modal";
import { ShowProvider } from "./contexts/Show";
import { TappedImgProvider } from "./contexts/TappedImg";
import SwitchingNav from "./components/SwitchingNav";
import { Link, Route, Routes } from "react-router-dom";
import Videos from "./pages/Videos";
import Photos from "./pages/Photos";
import { useState } from "react";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  const [scroll, setScroll] = useState(false);

  // const locomotiveScroll = new LocomotiveScroll();

  window.onscroll = () => {
    if (window.scrollY > window.innerWidth / 2) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  const handleToTheTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <>
      <SearchTermProvider>
        <ShowProvider>
          <TappedImgProvider>
            {/* NAVBAR */}
            <SearchBar />
            <SwitchingNav />
            <Modal />
            {scroll ? (
              <button id="top-btn" onClick={handleToTheTop}>
                <span className="material-symbols-outlined">
                  keyboard_double_arrow_up
                </span>
              </button>
            ) : null}
            <Routes>
              <Route path="/" element={<Photos />} />
              <Route path="/videos" element={<Videos />} />
              {/* ROUTES FOR OTHER PAGES */}
            </Routes>
          </TappedImgProvider>
        </ShowProvider>
      </SearchTermProvider>
    </>
  );
}

export default App;
