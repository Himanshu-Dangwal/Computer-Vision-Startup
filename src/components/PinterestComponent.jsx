import React, { useState } from "react";
import axios from "axios";

const FetchPinterestImage = () => {
  const [pinterestURL, setPinterestURL] = useState("");
  const [imageUrls, setImageUrls] = useState([]); // Store multiple images
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchPinterestImage = async () => {
    if (!pinterestURL.trim()) {
      setError("Please enter a valid Pinterest URL.");
      return;
    }
    setError(""); // Clear previous error
    setLoading(true);

    try {
      // Simulate API fetch (replace `/api/pinterest-images` with your actual endpoint)
      const response = await axios.post("/api/pinterest-images", {
        url: pinterestURL,
      });

      // Assume the API returns an array of image URLs in `response.data.images`
      setImageUrls(response.data.images || []);
    } catch (err) {
      setError("Failed to fetch Pinterest images. Please check the URL.");
    } finally {
      setLoading(false);
    }
  };

  const clearImages = () => {
    setPinterestURL("");
    setImageUrls([]);
    setError("");
  };

  return (
    <div style={styles.container}>
      <h1>Fetch Pinterest Images</h1>
      <input
        type="url"
        placeholder="Enter Pinterest Profile URL"
        value={pinterestURL}
        onChange={(e) => setPinterestURL(e.target.value)}
        style={styles.input}
        required
      />
      <button style={styles.button} onClick={fetchPinterestImage} disabled={loading}>
        {loading ? "Fetching..." : "Fetch Images"}
      </button>
      <button style={styles.buttonSecondary} onClick={() => (window.location.href = "/uploadphoto")}>
        Back to Upload
      </button>

      {error && <p style={styles.error}>{error}</p>}

      {/* Preview Section */}
      {imageUrls.length > 0 && (
        <div style={styles.gallery}>
          <h2>Fetched Images</h2>
          <div style={styles.imageGrid}>
            {imageUrls.map((url, index) => (
              <div key={index} style={styles.imageWrapper}>
                <img src={url} alt={`Pinterest Image ${index + 1}`} style={styles.image} />
              </div>
            ))}
          </div>
          <button style={styles.clearButton} onClick={clearImages}>
            Clear Images
          </button>
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
    overflowY: "auto",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    width: "300px",
    marginBottom: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    marginTop: "10px",
    marginBottom: "10px",
  },
  buttonSecondary: {
    padding: "10px 20px",
    backgroundColor: "#6c757d",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    marginBottom: "10px",
  },
  error: {
    color: "red",
    marginTop: "10px",
  },
  gallery: {
    marginTop: "20px",
    textAlign: "center",
    width: "100%",
    maxWidth: "800px",
  },
  imageGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
    gap: "10px",
    marginTop: "10px",
  },
  imageWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    borderRadius: "10px",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "auto",
    objectFit: "cover",
  },
  clearButton: {
    padding: "10px 20px",
    backgroundColor: "#dc3545",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    marginTop: "10px",
  },
};

export default FetchPinterestImage;
