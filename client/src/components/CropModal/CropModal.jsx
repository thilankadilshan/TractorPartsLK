// components/CropModal.jsx
import React, { useState, useCallback } from "react";
import Cropper from "react-easy-crop";
import Slider from "react-slider";
import getCroppedImg from "../utils/cropImage";
import "../styles/CropModal.css";

const CropModal = ({ image, onClose, onCropComplete }) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const onCropCompleteInternal = useCallback((_, croppedPixels) => {
    setCroppedAreaPixels(croppedPixels);
  }, []);

  const handleDone = async () => {
    const croppedBlob = await getCroppedImg(image, croppedAreaPixels);
    onCropComplete(croppedBlob);
    onClose();
  };

  return (
    <div className="crop-modal">
      <div className="crop-container">
        <Cropper
          image={image}
          crop={crop}
          zoom={zoom}
          aspect={1}
          onCropChange={setCrop}
          onZoomChange={setZoom}
          onCropComplete={onCropCompleteInternal}
        />
        <Slider
          className="zoom-slider"
          min={1}
          max={3}
          step={0.1}
          value={zoom}
          onChange={setZoom}
        />
        <div className="crop-buttons">
          <button onClick={handleDone}>Crop</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default CropModal;
