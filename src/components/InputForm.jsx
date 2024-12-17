import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/InputForm.css";

function InputForm() {
  const [formData, setFormData] = useState({
    customerId: "",
    redirectUri: "",
    policyVersion: "",
    purpose: "",
    scope: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/consent", { state: { formData } });
  };

  return (
    <div>
      <h2>Enter Consent Details</h2>
      <div className="input-container">
        <form onSubmit={handleSubmit}>
          <label>
            Customer ID:
            <input
              className="details-input"
              type="text"
              name="customerId"
              value={formData.customerId}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label>
            Redirect URI:
            <input
              type="text"
              className="details-input"
              name="redirectUri"
              value={formData.redirectUri}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label>
            Policy Version:
            <input
              type="text"
              className="details-input"
              name="policyVersion"
              value={formData.policyVersion}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label>
            Purpose:
            <input
              type="text"
              className="details-input"
              name="purpose"
              value={formData.purpose}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label>
            Scope:
            <input
              type="text"
              className="details-input"
              name="scope"
              value={formData.scope}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <button className="request-button" type="submit">
            Request Consent
          </button>
        </form>
      </div>
    </div>
  );
}

export default InputForm;
