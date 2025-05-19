import React, { useState, useRef } from "react";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import "./SearchByImage.css";

const SearchByImage = () => {
  const [image, setImage] = useState(null); // URL for preview
  const [file, setFile] = useState(null); // actual file to send
  const fileInputRef = useRef();
  const videoRef = useRef(null);
  const [cameraOn, setCameraOn] = useState(false);

  // Handle file drop
  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && droppedFile.type.startsWith("image")) {
      setImage(URL.createObjectURL(droppedFile));
      setFile(droppedFile);
    }
  };

  // Handle file browse input
  const handleBrowse = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type.startsWith("image")) {
      setImage(URL.createObjectURL(selectedFile));
      setFile(selectedFile);
    }
  };

  // Open camera (unchanged)
  const openCamera = async () => {
    try {
      setCameraOn(true);
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
    } catch (err) {
      alert("Camera access denied or not available.");
    }
  };

  // Capture image from camera and convert to file
  const captureImage = () => {
    const canvas = document.createElement("canvas");
    const video = videoRef.current;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext("2d").drawImage(video, 0, 0);

    // Convert canvas to blob/file
    canvas.toBlob((blob) => {
      const capturedFile = new File([blob], "captured.png", {
        type: "image/png",
      });
      setFile(capturedFile);
      setImage(URL.createObjectURL(capturedFile));
    }, "image/png");

    video.srcObject.getTracks().forEach((track) => track.stop());
    setCameraOn(false);
  };

  // Handle Search button click: send image file to backend and redirect on response
  const handleSearch = async () => {
    if (!file) {
      alert("Please upload or capture an image first");
      return;
    }

    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await fetch(
        "http://localhost:5000/api/image-search/classify",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (response.ok && data.predictedName) {
        // Redirect to existing text search page with predictedName
        window.location.href = `/search?q=${encodeURIComponent(
          data.predictedName
        )}`;
      } else {
        alert(data.error || "Failed to get prediction");
      }
    } catch (error) {
      console.error(error);
      alert("Error while searching by image");
    }
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
              <button className="search-btn" onClick={handleSearch}>
                Search
              </button>
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
