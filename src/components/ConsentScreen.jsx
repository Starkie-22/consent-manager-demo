import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/ConsentScreen.css";
import HyperVergeLogo from "../assets/hyperverge-logo.svg";

function ConsentScreen() {
  const location = useLocation();
  const navigate = useNavigate();
  const { formData } = location.state || {};

  const [consentDetails, setConsentDetails] = useState({
    contactInfo: false,
    email: false,
    phoneNumber: false,
    address: false,
  });

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setConsentDetails((prevDetails) => ({
      ...prevDetails,
      [name]: checked,
    }));
  };

  const handleAllow = () => {
    if (
      !consentDetails.contactInfo ||
      !consentDetails.email ||
      !consentDetails.phoneNumber ||
      !consentDetails.address
    ) {
      alert("Please select all the checkboxes to proceed.");
      return;
    }
    const mockToken = "mock-jwt-token-123456";

    navigate("/validate-token", { state: { token: mockToken } });
  };

  const handleDeny = () => {
    navigate("/");
  };

  return (
    <div className="consent-container">
      <div className="header">
        <img src={HyperVergeLogo} alt="HyperVerge" className="company-logo" />
        <div>
          <p className="user-email">
            {formData?.customerId || "starkie@gmail.com"}
          </p>
          <p className="policy-version">
            {formData?.policyVersion || "Policy Version 1.0"}
          </p>
        </div>
      </div>

      <hr className="divider" />

      <p className="description">
        The following details will be collected from you by{" "}
        <strong>HyperVerge</strong>.
      </p>

      <div className="checkbox-section">
        <label>
          <input
            type="checkbox"
            name="contactInfo"
            checked={consentDetails.contactInfo}
            onChange={handleCheckboxChange}
          />{" "}
          Contact Info
        </label>
        <label>
          <input
            type="checkbox"
            name="email"
            checked={consentDetails.email}
            onChange={handleCheckboxChange}
          />{" "}
          Email Address
        </label>
        <label>
          <input
            type="checkbox"
            name="phoneNumber"
            checked={consentDetails.phoneNumber}
            onChange={handleCheckboxChange}
          />{" "}
          Phone Number
        </label>
        <label>
          <input
            type="checkbox"
            name="address"
            checked={consentDetails.address}
            onChange={handleCheckboxChange}
          />{" "}
          Address
        </label>
      </div>

      <hr className="divider" />

      <div className="purposes">
        <p>
          <strong>Purpose:</strong> To access and manage your account details.
        </p>
        <p>
          <strong>Scope:</strong> View and edit your personal information.
        </p>
      </div>

      <p className="consent-info">
        By clicking Allow, you allow the app to use your information in
        accordance with their respective <span>terms of service</span> and{" "}
        <span>privacy policies</span>.
      </p>

      <div className="buttons">
        <button className="deny-button" onClick={handleDeny}>
          Deny
        </button>
        <button className="allow-button" onClick={handleAllow}>
          Allow
        </button>
      </div>
    </div>
  );
}

export default ConsentScreen;
