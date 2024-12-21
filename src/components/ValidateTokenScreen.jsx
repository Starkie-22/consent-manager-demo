import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "../styles/ValidateTokenScreen.css";
import Tick from "../assets/icons/tick.svg";

function ValidateTokenScreen() {
  const location = useLocation();
  const { token } = location.state || {};

  const [inputToken, setInputToken] = useState("");
  const [isValid, setIsValid] = useState(null);

  const handleTokenChange = (e) => {
    setInputToken(e.target.value);
  };

  const handleValidateToken = () => {
    if (inputToken === "5432167890") {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  return (
    <div className="validate-token-container">
      <div className="token-container">
        <label className="token-label">
          Token
          <input
            type="text"
            placeholder="<Token Value>"
            value={inputToken}
            onChange={handleTokenChange}
            className="token-input"
          />
        </label>
        <button className="validate-button" onClick={handleValidateToken}>
          Validate Token
        </button>
      </div>

      {isValid !== null && (
        <div className="consent-result">
          <p>Consent Status</p>
          <div>
            {isValid ? (
              <div className="result-accepted">
                <img src={Tick} className="tick" alt="Acepted" />
                <p>Accepted</p>
              </div>
            ) : (
              <div className="result-declined">
                <p>Declined!!</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default ValidateTokenScreen;
