import React, { useState } from "react";
import axios from "axios";

const ImageComponent = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Please select an image!");
      return;
    }

    const formData = new FormData();
    formData.append("image", selectedFile);

    try {
      const { data } = await axios.post("/api/images/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setUploadedImage(data.imagePath);
    } catch (error) {
      alert("Upload failed!");
    }
  };

  return (
    <div>
      <h2>Upload and View Images</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      {uploadedImage && (
        <div>
          <h3>Uploaded Image:</h3>
          <img src={`http://localhost:5000${uploadedImage}`} alt="Uploaded" width="300" />
        </div>
      )}
    </div>
  );
};

export default ImageComponent;
