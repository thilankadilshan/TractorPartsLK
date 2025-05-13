import React, { useState } from "react";

const SiteSettings = () => {
  const [siteTitle, setSiteTitle] = useState("TractorPartsLK");

  const handleSave = () => {
    alert("Settings saved!");
  };

  return (
    <div>
      <h1>Site Settings</h1>
      <div>
        <label>Site Title</label>
        <input
          value={siteTitle}
          onChange={(e) => setSiteTitle(e.target.value)}
        />
        <button onClick={handleSave}>Save</button>
      </div>
    </div>
  );
};

export default SiteSettings;
