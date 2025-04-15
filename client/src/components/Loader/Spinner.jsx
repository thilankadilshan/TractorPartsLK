import React from 'react';
import './Spinner.css'; // Create this for styles

const Spinner = () => {
  return (
    <div className="spinner-overlay">
      <div className="spinner" />
    </div>
  );
};

export default Spinner;
