import { Col } from "react-bootstrap";
import { useTappedImg } from "../../contexts/TappedImg";
import "./VisualGridElement.css";
import { lazy, Suspense } from "react";
import { MdBookmarkBorder } from "react-icons/md";
import Loading from "../loaders/Loading";
import { useNavigate } from "react-router-dom";
import CopyToClipboard from "../reusable/Copy-to-clipboard";
const Video = lazy(() => import("./Video"));
const Photo = lazy(() => import("./Photo"));

function VisualGridElement({ item, video }) {
  const { setImgData } = useTappedImg();
  const tags = item.tags.split(`, `); //String => Array

  const navigate = useNavigate();
  const handleImgClick = () => {
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
              <span className="material-symbols-outlined">download</span>
              <span>{item.downloads}</span>
            </div>
            <div className="flex gap-2 items-center text-3xl">
              <CopyToClipboard
                toCopy={video ? item.videos.small.url : item.webformatURL}
                className="lg:hidden"
              />
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
