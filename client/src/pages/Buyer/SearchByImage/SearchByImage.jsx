import React, { useState, useRef } from "react";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import "./SearchByImage.css";

const SearchByImage = () => {
  const [image, setImage] = useState(null);
  const fileInputRef = useRef();
  const videoRef = useRef(null);
  const [cameraOn, setCameraOn] = useState(false);

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image")) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleBrowse = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image")) {
      setImage(URL.createObjectURL(file));
    }
  };

  const openCamera = async () => {
    try {
      setCameraOn(true);
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
    } catch (err) {
      alert("Camera access denied or not available.");
    }
  };

  const captureImage = () => {
    const canvas = document.createElement("canvas");
    const video = videoRef.current;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext("2d").drawImage(video, 0, 0);
    const dataUrl = canvas.toDataURL("image/png");
    setImage(dataUrl);
    video.srcObject.getTracks().forEach((track) => track.stop());
    setCameraOn(false);
  };

  return (
    <div className="search-image-page">
      <Header />
      <div className="search-image-container">
        <div
          className="upload-section"
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
        >
          <div className="drop-box">
            <p>
              Drop your image here
              <br />
              or
            </p>
            <button onClick={() => fileInputRef.current.click()}>Browse</button>
            <input
              type="file"
              accept="image/*"
              onChange={handleBrowse}
              ref={fileInputRef}
              hidden
            />
            <button className="camera-btn" onClick={openCamera}>
              Open Camera
            </button>
          </div>
          {cameraOn && (
            <div className="camera-section">
              <video ref={videoRef} autoPlay playsInline muted></video>
              <button onClick={captureImage}>Capture</button>
            </div>
          )}
        </div>

        <div className="preview-section">
          {image ? (
            <>
              <img src={image} alt="Uploaded" className="preview-image" />
              <button className="search-btn">Search</button>
            </>
          ) : (
            <p className="placeholder-text">No image uploaded</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SearchByImage;
