import React, { useState, useCallback } from "react";
import Cropper from "react-easy-crop";
import getCroppedImg from "../../utils/cropImage";
import "./CropModal.css";

const CropModal = ({ image, onClose, onCropComplete }) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const onCropCompleteInternal = useCallback((_, croppedPixels) => {
    setCroppedAreaPixels(croppedPixels);
  }, []);

  const handleDone = async () => {
    if (!croppedAreaPixels) return alert("Crop not ready yet!");

    try {
      const croppedBlob = await getCroppedImg(image, croppedAreaPixels);
      onCropComplete(croppedBlob);
      onClose();
    } catch (err) {
      console.error("Crop error:", err);
      alert("Failed to crop image");
    }
  };

  return (
    <div className="crop-modal">
      <div className="cropper-wrapper">
        <Cropper
          image={image}
          crop={crop}
          zoom={zoom}
          aspect={1}
          onCropChange={setCrop}
          onZoomChange={setZoom}
          onCropComplete={onCropCompleteInternal}
          cropShape="rect"
          showGrid={false}
        />
      </div>

      <div className="controls">
        <label>Zoom</label>
        <input
          type="range"
          min={1}
          max={3}
          step={0.1}
          value={zoom}
          onChange={(e) => setZoom(Number(e.target.value))}
        />
      </div>

      <div className="crop-buttons">
        <button className="btn primary" onClick={handleDone}>
          Crop
        </button>
        <button className="btn secondary" onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default CropModal;
