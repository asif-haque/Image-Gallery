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

function App() {
  const [scroll, setScroll] = useState(false);
  // window.onscroll = () => {
  //   document.body.scrollTop > 500 ? setScroll(true) : setScroll(scroll);
  // };
  window.onscroll = () => {
    if (
      document.body.scrollTop > 200 ||
      document.documentElement.scrollTop > 200
    ) {
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
            <SearchBar />
            <SwitchingNav />
            <Modal />
            {scroll ? (
              <button id="top-btn" onClick={handleToTheTop}>
                <span class="material-symbols-outlined">
                  keyboard_double_arrow_up
                </span>
              </button>
            ) : null}

            <Routes>
              <Route path="/" element={<Photos />} />
              <Route path="/videos" element={<Videos />} />
            </Routes>
          </TappedImgProvider>
        </ShowProvider>
      </SearchTermProvider>
    </>
  );
}

export default App;
