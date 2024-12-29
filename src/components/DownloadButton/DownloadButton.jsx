import React from "react";
import "./DownloadButton.scss";

const DownloadButton = () => {

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Karthi_Babu.pdf';
    link.download = 'KARTHI_BABU(Resume).pdf';
    link.click();
  };

  return (
    <div className="download-btn">
      <button
        id="button"
        onClick={handleDownload}
      ></button>
    </div>
  );
};

export default DownloadButton;
