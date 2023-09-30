import Images from "./components/Images";
import SearchBar from "./components/SearchBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { SearchTermProvider } from "./contexts/SearchTerm";
import Modal from "./components/Modal";
import { ShowProvider } from "./contexts/Show";
import { TappedImgProvider } from "./contexts/TappedImg";
import SwitchingNav from "./components/SwitchingNav";
import { Route, Routes } from "react-router-dom";
import Videos from "./components/Videos";

function App() {
  return (
    <>
      <SearchTermProvider>
        <ShowProvider>
          <TappedImgProvider>
            <SearchBar />
            <SwitchingNav />
            <Modal />

            <Routes>
              <Route path="/" element={<Images />} />
              <Route path="/videos" element={<Videos />} />
            </Routes>
          </TappedImgProvider>
        </ShowProvider>
      </SearchTermProvider>
    </>
  );
}

export default App;
