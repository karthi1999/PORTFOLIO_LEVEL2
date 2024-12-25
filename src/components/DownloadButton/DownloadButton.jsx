import React, { useState } from "react";
import "./DownloadButton.scss";

const DownloadButton = () => {
  const [buttonState, setButtonState] = useState("");

  const handleClick = () => {
    setButtonState("onclic");
    setTimeout(() => {
      setButtonState("validate");
      setTimeout(() => {
        setButtonState("");
      }, 1250);
    }, 2250);
  };

  return (
    <div className="download-btn">
      <button
        id="button"
        className={buttonState}
        onClick={handleClick}
      ></button>
    </div>
  );
};

export default DownloadButton;
