import React, { useState } from "react";
import "./Preview.css";

const Preview = ({ onImageSelect }) => {
  const [imagePreview, setImagePreview] = useState(null);

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {
      setImagePreview(reader.result);     // Show preview
      onImageSelect(reader.result);       // Send Base64 image to Main.jsx
    };

    reader.readAsDataURL(file); // Convert to Base64 string
  };

  return (
    <div>
      <input 
        type="file"
        accept="image/*"
        onChange={handleChange}
        className="file-input"
      />

      {imagePreview && (
        <img
          src={imagePreview}
          alt="preview"
          style={{
            height: "200px",
            width: "auto",
            marginTop: "10px",
            borderRadius: "10px",
            objectFit : 'contain',
            maxWidth: "100%"
          }}
        />
      )}
    </div>
  );
};

export default Preview;
