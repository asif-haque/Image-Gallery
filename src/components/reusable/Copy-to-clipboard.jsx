import copy from "copy-to-clipboard";
import React, { useEffect, useState } from "react";
import { IoIosLink } from "react-icons/io";

const CopyToClipboard = ({ toCopy, className = "" }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false);
    }, 2 * 1000);

    return () => clearTimeout(timer);
  }, [copied]);

  const handleCopy = (e) => {
    e.stopPropagation();
    copy(toCopy);
    setCopied(true);
  };

  return (
    <button className={`flex ${className}`} onClick={handleCopy}>
      {copied ? (
        <span className="text-lg">Copied!</span>
      ) : (
        <IoIosLink className="text-3xl" />
      )}
    </button>
  );
};

export default CopyToClipboard;
