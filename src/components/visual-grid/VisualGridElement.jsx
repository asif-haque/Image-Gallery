import { Button, Col } from "react-bootstrap";
import { useShow } from "../../contexts/Show";
import { useTappedImg } from "../../contexts/TappedImg";
import "./VisualGridElement.css";
import { lazy, Suspense } from "react";
import { MdBookmarkBorder } from "react-icons/md";
import Loading from "../loaders/Loading";
import Modal from "../modal/Modal";
import { useNavigate } from "react-router-dom";
const Video = lazy(() => import("./Video"));
const Photo = lazy(() => import("./Photo"));

function VisualGridElement({ item, video }) {
  const { show, setShow } = useShow();
  const { setImgData } = useTappedImg();
  const tags = item.tags.split(`, `); //String => Array

  const navigate = useNavigate();
  const handleImgClick = () => {
    setShow(true);
    setImgData(item);
    navigate(`/${item.id}`);
  };

  return (
    <>
      <Col sm={12} md={6} lg={4} className="mb-3">
        <div
          className="p-3 shadow"
          style={{
            height: "100%",
            width: "95%",
            margin: "auto",
          }}
        >
          <Suspense fallback={<Loading />}>
            {video ? (
              <Video item={item} />
            ) : (
              <Photo handleImgClick={handleImgClick} item={item} />
            )}
          </Suspense>

          <div className="flex justify-between my-3">
            <div className="flex items-center gap-1">
              {/* <button
              className="px-2 py-1 border group hover:bg-gray-900 hover:text-white duration-200 rounded"
              onClick={() =>
                downloadImage(
                  video ? item.videos.large.url : item.largeImageURL,
                  `${item.id}.${video ? `mp4` : `jpg`}`
                )
              }
            > */}
              <span className="material-symbols-outlined">download</span>
              {/* </button> */}
              <span>{item.downloads}</span>
            </div>
            <div className="flex items-center text-3xl">
              <button>
                <MdBookmarkBorder />
              </button>
            </div>
          </div>
          <div className="flex flex-wrap">
            {tags.map((tag, index) => (
              <span
                className="bg-gray-200 rounded-lg m-1 mr-3 px-2 py-1 text-sm"
                key={index}
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </Col>
      {/* {show && <Modal />} */}
    </>
  );
}

export default VisualGridElement;
