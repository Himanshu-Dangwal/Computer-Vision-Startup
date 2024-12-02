import React, { useState } from "react";

const UploadPhoto = () => {
  const [previews, setPreviews] = useState([]); // Store previews of all images

  const handleFileUpload = (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      // Generate previews for all selected files
      const filePreviews = Array.from(files).map((file) =>
        URL.createObjectURL(file)
      );
      setPreviews((prev) => [...prev, ...filePreviews]); // Add new previews to existing ones
      console.log("Files uploaded:", Array.from(files).map((file) => file.name));
    }
  };

  const handleRemoveImage = (indexToRemove) => {
    setPreviews((prev) => prev.filter((_, index) => index !== indexToRemove)); // Remove selected image
  };

  return (
    <div style={styles.container}>
      <h1>Upload Your Photos</h1>
      {/* Hidden file input */}
      <input
        type="file"
        id="uploadPhotos"
        onChange={handleFileUpload}
        style={{ display: "none" }}
        multiple // Allow multiple file selection
        accept="image/*" // Restrict to image files
      />
      {/* Buttons */}
      <div style={styles.buttonContainer}>
        <button
          style={styles.button}
          onClick={() => document.getElementById("uploadPhotos").click()}
        >
          Upload Photos
        </button>
        <button
          style={styles.buttonSecondary}
          onClick={() => (window.location.href = "/pinterest")}
        >
          Upload Using Pinterest
        </button>
      </div>
      {/* Preview Images */}
      {previews.length > 0 && (
        <div style={styles.previewContainer}>
          <h3>Image Previews:</h3>
          <div style={styles.imageGrid}>
            {previews.map((preview, index) => (
              <div key={index} style={styles.imageWrapper}>
                <img
                  src={preview}
                  alt={`Preview ${index + 1}`}
                  style={styles.previewImage}
                />
                <span
                  style={styles.removeCross}
                  onClick={() => handleRemoveImage(index)}
                >
                  ×
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f9f9f9",
    fontFamily: "Arial, sans-serif",
    padding: "20px",
  },
  buttonContainer: {
    marginTop: "20px",
    display: "flex",
    gap: "10px",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },
  buttonSecondary: {
    padding: "10px 20px",
    backgroundColor: "#6c757d",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },
  previewContainer: {
    marginTop: "20px",
    textAlign: "center",
    width: "100%",
  },
  imageGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    gap: "10px",
    marginTop: "10px",
  },
  imageWrapper: {
    position: "relative",
    display: "inline-block",
  },
  previewImage: {
    maxWidth: "100%",
    maxHeight: "150px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
  removeCross: {
    position: "absolute",
    top: "5px",
    right: "5px",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    color: "#fff",
    borderRadius: "50%",
    width: "20px",
    height: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
  },
};

export default UploadPhoto;
