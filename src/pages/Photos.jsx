import { useState } from "react";
import VisualGrid from "../components/VisualGrid";

function Photos() {
  const [video, setVideo] = useState(false);
  return <VisualGrid video={video} />;
}

export default Photos;
