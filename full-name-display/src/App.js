import React, { useState } from 'react';
import './App.css';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');
  const [showError, setShowError] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName.trim() === '' && lastName.trim() === '') {
      setShowError(true);
      setShowTooltip(true);
      return;
    }
    setShowError(false);
    setShowTooltip(false);
    setFullName(`${firstName} ${lastName}`);
  };

  const handleInputChange = (e) => {
    setShowError(false);
    setShowTooltip(false);
    const { name, value } = e.target;
    if (name === 'firstName') {
      setFirstName(value);
    } else {
      setLastName(value);
    }
  };

  return (
    <div className="App">
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>
            First Name:
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={handleInputChange}
              required // Make the input field required
            />
          </label>
          {showTooltip && (
            <span className="tooltip show">⚠️ Please fill out both fields before submitting.</span>
          )}
        </div>
        <div className="input-container">
          <label>
            Last Name:
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={handleInputChange}
              required // Make the input field required
            />
          </label>
        </div>
        <button type="submit">Submit</button>
        {fullName && <p>Full Name: {fullName}</p>}
      </form>
    </div>
  );
}

export default App;
