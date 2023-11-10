import React from 'react';

const DownloadCV = () => {
  const googleDriveFileURL = `https://drive.google.com/file/d/1ReRZj9GyBwsWxrt9V5QRTyc4Mm1_cQUU/view?usp=sharing`;

  const handleDownload = () => {
    const a = document.createElement('a');
    a.href = googleDriveFileURL;
    a.target = '_blank';
    document.body.appendChild(a);
    a.click();
  };

  return (
    <button onClick={handleDownload} className={`py-4 px-6 font-mono font-medium text-[18px] text-purple-50 bg-blue-600/100 rounded-[10px] outline-none`}>
      Tải Xuống CV
    </button>
  );
};

export default DownloadCV;
