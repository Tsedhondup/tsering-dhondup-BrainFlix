import "./ConfirmVidUploadMessage.scss";
import { useState, useEffect } from "react";
const ConfirmVidUploadMessage = (props) => {
  const [confirmUpload, setConfirmUpload] = useState(
    sessionStorage.getItem("uploadedClassName") // initially empty in sessionStorage
  );

  useEffect(() => {
    setTimeout(() => {
      setConfirmUpload("");
      sessionStorage.removeItem("uploadedClassName");
    }, 3000);
  }, []);
  return (
    <p className={`video-upload-msg ${confirmUpload}`}>
      Video Uploaded successfully!
    </p>
  );
};
export default ConfirmVidUploadMessage;
