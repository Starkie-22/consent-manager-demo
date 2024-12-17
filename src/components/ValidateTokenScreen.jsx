import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "../styles/ValidateTokenScreen.css";

function ValidateTokenScreen() {
  const location = useLocation();
  const { token } = location.state || {};

  const [inputToken, setInputToken] = useState("");
  const [isValid, setIsValid] = useState(null);

  const handleTokenChange = (e) => {
    setInputToken(e.target.value);
  };

  const handleValidateToken = () => {
    if (inputToken === "mock-jwt-token-123456") {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  return (
    <div className="validate-token-container">
      <h2>Validate Token</h2>
      <p>
        Token: {token}
        <br />
        Paste this token below to validate
      </p>
      <input
        type="text"
        placeholder="Paste your token here"
        value={inputToken}
        onChange={handleTokenChange}
        className="token-input"
      />
      <button className="validate-button" onClick={handleValidateToken}>
        Validate Token
      </button>

      {isValid !== null && (
        <p className={isValid ? "valid" : "invalid"}>
          {isValid ? "Token is valid!" : "Invalid token. Please try again."}
        </p>
      )}
    </div>
  );
}

export default ValidateTokenScreen;
