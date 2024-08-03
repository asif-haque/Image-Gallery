import { Outlet } from "react-router-dom";
import VisualGrid from "../components/visual-grid/VisualGrid";

function Photos() {
  return (
    <>
      <VisualGrid video={false} />
      <Outlet />
    </>
  );
}

export default Photos;
