import SearchBar from "./components/header/SearchBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { SearchTermProvider } from "./contexts/SearchTerm";
import { ShowProvider } from "./contexts/Show";
import { TappedImgProvider } from "./contexts/TappedImg";
import SwitchingNav from "./components/header/SwitchingNav";
import { Link, Route, Routes } from "react-router-dom";
// import Videos from "./pages/Videos";
import Photos from "./pages/Photos";
import { lazy, Suspense, useState } from "react";
import Loading from "./components/loaders/Loading";
const Videos = lazy(() => import("./pages/Videos"));
const Modal = lazy(() => import("./components/modal/Modal"));

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
            {/* <Suspense fallback={<Loading />}>
              <Modal />
            </Suspense> */}
            {scroll ? (
              <button id="top-btn" onClick={handleToTheTop}>
                <span className="material-symbols-outlined">
                  keyboard_double_arrow_up
                </span>
              </button>
            ) : null}
            <Suspense fallback={<Loading />}>
              <Routes>
                <Route path="/" element={<Photos />}>
                  <Route path="/:id" element={<Modal />} />
                </Route>
                <Route path="/videos" element={<Videos />} />
                {/* ROUTES FOR OTHER PAGES */}
              </Routes>
            </Suspense>
          </TappedImgProvider>
        </ShowProvider>
      </SearchTermProvider>
    </>
  );
}

export default App;
