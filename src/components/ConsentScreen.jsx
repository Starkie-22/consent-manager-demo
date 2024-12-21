import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/ConsentScreen.css";
import ConsentCompanies from "../assets/icons/consent-companies.svg";
import { ConsentSDK } from "../services/SDK";

const sdk = new ConsentSDK("http://13.203.21.49:3000/v1");

function ConsentScreen() {
  const location = useLocation();
  const navigate = useNavigate();
  const { formData } = location.state || {};

  const [consentDetails, setConsentDetails] = useState({
    facialScan: false,
    locationAccess: false,
  });

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setConsentDetails((prevDetails) => ({
      ...prevDetails,
      [name]: checked,
    }));
  };

  let allowButtonColor = "#dddcfc";
  if (consentDetails.facialScan && consentDetails.locationAccess) {
    allowButtonColor = "#554EF1";
  }

  const handleAllow = () => {
    if (!consentDetails.facialScan || !consentDetails.locationAccess) {
      alert("Please select all the checkboxes to proceed.");
      return;
    } else {
      navigate("/validate-token");
    }
    // const consentData = {
    //   customerId: formData?.customerId || "johndoe@gmail.com",
    //   redirectUri: formData?.redirectUri || "http://google.com/redirect",
    //   transactionId: formData?.transactionId || sdk.uuidv4(),
    //   policyVersion: formData?.policyVersion || "1.0",
    //   refUri: formData?.refUri || "http://google.com/ref",
    //   text: "Consent to access your data",
    //   code: "12345678",
    //   scope: {
    //     contactInfo: consentDetails.contactInfo,
    //     email: consentDetails.email,
    //     phoneNumber: consentDetails.phoneNumber,
    //     address: consentDetails.address,
    //   },
    // };

    // try {
    //   const response = await sdk.requestConsent(
    //     consentData.customerId,
    //     consentData.transactionId,
    //     consentData.redirectUri,
    //     consentData.policyVersion,
    //     consentData.refUri,
    //     consentData.text,
    //     consentData.code,
    //     consentData.scope
    //   );

    //   if (response.token) {
    //     navigate("/validate-token", { state: { token: response.token } });
    //   } else {
    //     alert("Failed to get a token.");
    //   }
    // } catch (error) {
    //   console.error("Error requesting consent:", error);
    //   alert(
    //     "An error occurred while processing your consent. Please try again."
    //   );
    // }
  };

  const handleDeny = () => {
    navigate("/");
  };

  return (
    <div className="consent-container">
      <div className="header">
        <img
          src={ConsentCompanies}
          alt="HyperVerge"
          className="consent-request-company"
        />
        <div className="customer-email">
          <p className="user-email">Johndoe@gmail.com</p>
          <p className="policy-version">
            Policy Version: {formData?.policyVersion || "1.0"}
          </p>
        </div>
      </div>

      <hr className="divider" />

      <div className="content-box-1">
        <div className="content-box-2">
          <div className="checkbox-section">
            <p className="description">
              The following details will be collected from you by{" "}
              {" <XYZ_name>"}.
            </p>
            <label>
              <input
                type="checkbox"
                name="facialScan"
                checked={consentDetails.facialScan}
                onChange={handleCheckboxChange}
              />{" "}
              Facial scan
            </label>
            <label>
              <input
                type="checkbox"
                name="locationAccess"
                checked={consentDetails.locationAccess}
                onChange={handleCheckboxChange}
              />{" "}
              Location Access
            </label>
          </div>

          <div className="purposes">
            <p className="purpose-heading">Purpose</p>
            <p class="purpose-para">Fraud prevention and compliance checks</p>
            <p class="purpose-para">Fraud prevention and compliance checks</p>
          </div>
        </div>
      </div>

      <div className="terms-and-buttons">
        <p className="consent-terms">
          By clicking Allow, you allow the app to use your information in
          accordance to their respective <span>terms of serve</span> and{" "}
          <span>privacy policies</span>.
        </p>

        <div className="buttons">
          <button className="deny-button" onClick={handleDeny}>
            Deny
          </button>
          <button
            className="allow-button"
            style={{ backgroundColor: allowButtonColor }}
            onClick={handleAllow}
          >
            Allow
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConsentScreen;
