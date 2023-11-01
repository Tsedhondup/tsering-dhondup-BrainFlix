import "./ConfirmVidUploadMessage.scss";
import { useState, useEffect } from "react";
const ConfirmVidUploadMessage = (props) => {
  const [confirmUpload, setConfirmUpload] = useState(
    sessionStorage.getItem("isUploadedClass")
  );

  console.log(confirmUpload);
  useEffect(() => {
    setTimeout(() => {
      setConfirmUpload("");
      sessionStorage.removeItem("isUploadedClass");
    }, 4000);
  }, []);
  return (
    <p className={`video-upload-msg ${confirmUpload}`}>
      Video Uploaded successfully!
    </p>
  );
};
export default ConfirmVidUploadMessage;
