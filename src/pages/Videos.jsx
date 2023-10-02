import { useState } from "react";
import VisualGrid from "../components/VisualGrid";

function Videos() {
  const [video, setVideo] = useState(true);
  return <VisualGrid video={video} />;
}

export default Videos;
