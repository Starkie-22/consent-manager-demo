import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/InputForm.css";
import "@fontsource/inter";

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

  let buttonColor = "#dddcfc";

  if (
    formData.customerId &&
    formData.redirectUri &&
    formData.policyVersion &&
    formData.purpose &&
    formData.scope
  ) {
    buttonColor = "#554EF1";
  }

  return (
    <div>
      <div className="input-container">
        <p className="heading-2">
          <b>Enter Consent Details</b>
        </p>
        <form onSubmit={handleSubmit} className="input-form">
          <div className="input-set">
            <label className="input-label" htmlFor="customer-id">
              Customer ID
            </label>
            <input
              id="customer-id"
              className="details-input"
              type="text"
              name="customerId"
              value={formData.customerId}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-set">
            <label className="input-label" htmlFor="redirect-url">
              Redirect URI
            </label>
            <input
              id="redirect-url"
              type="url"
              className="details-input"
              name="redirectUri"
              value={formData.redirectUri}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-set">
            <label className="input-label" htmlFor="policy-version">
              Policy Version
            </label>
            <input
              id="policy-version"
              type="text"
              className="details-input"
              name="policyVersion"
              value={formData.policyVersion}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-set">
            <label className="input-label" htmlFor="purpose">
              Purpose
            </label>
            <input
              id="purpose"
              type="text"
              className="details-input"
              name="purpose"
              value={formData.purpose}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-set">
            <label className="input-label" htmlFor="scope">
              Scope
            </label>
            <input
              id="scope"
              type="text"
              className="details-input"
              name="scope"
              value={formData.scope}
              onChange={handleChange}
              required
            />
          </div>
          <button
            id="request-consent-button"
            className="request-consent-button"
            type="submit"
            style={{ backgroundColor: buttonColor }}
          >
            Request Consent
          </button>
        </form>
      </div>
    </div>
  );
}

export default InputForm;
