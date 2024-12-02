import React, { useState } from "react";
import axios from "axios";

const AuthComponent = () => {
  const [isSignup, setIsSignup] = useState(true);
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(""); // Clear errors as the user types
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (isSignup && !formData.name.trim()) {
      setError("Name is required for signup.");
      return;
    }

    if (!formData.email.trim() || !formData.password.trim()) {
      setError("Email and password are required.");
      return;
    }

    setLoading(true);
    const url = isSignup ? "/api/auth/signup" : "/api/auth/login";

    try {
      const { data } = await axios.post(url, formData);
      alert(isSignup ? "Signup successful!" : "Login successful!");
      localStorage.setItem("token", data.token); // Store token for future requests
      setFormData({ name: "", email: "", password: "" }); // Reset form
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h2>{isSignup ? "Signup" : "Login"}</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        {isSignup && (
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            style={styles.input}
            required
          />
        )}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <button type="submit" style={styles.button} disabled={loading}>
          {loading ? "Please wait..." : isSignup ? "Signup" : "Login"}
        </button>
      </form>
      {error && <p style={styles.error}>{error}</p>}
      <button
        onClick={() => {
          setIsSignup(!isSignup);
          setError(""); // Clear errors when switching modes
        }}
        style={styles.switchButton}
      >
        {isSignup ? "Switch to Login" : "Switch to Signup"}
      </button>
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
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "300px",
  },
  input: {
    padding: "10px",
    margin: "10px 0",
    width: "100%",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px 20px",
    margin: "10px 0",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  switchButton: {
    padding: "10px 20px",
    margin: "10px 0",
    backgroundColor: "#6c757d",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  error: {
    color: "red",
    marginTop: "10px",
    textAlign: "center",
  },
};

export default AuthComponent;
