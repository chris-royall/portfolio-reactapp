import React, { useState } from 'react';
import { LoggingService } from '../../services/logging.service';
import './AppPopup.css';

interface PopupProps {
  closePopup: () => void;
}

const AppPopup: React.FC<PopupProps> = ({ closePopup }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleLinkClick = (linkName: string) => {
    LoggingService(linkName);
  };

  const [submitted, setSubmitted] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null); // Change to string or null
  const [formErrors, setFormErrors] = useState(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const isFormValid = () => formData.name && formData.email && formData.message;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    if (!isFormValid()) {
      setFormErrors(true);
      return;
    }
  
    const body = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };
  
    try {
      // Make API POST request
      const response = await fetch('https://api.chrisroyall.com/v1-local/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body), // Corrected: Stringify the body
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      setSubmitted(true);
      setFormErrors(false);
      setSuccessMessage('Thank you for contacting us. We will get back to you soon.');
      setSubmissionError(null);
      setTimeout(closePopup, 2000);
    } catch (error) {
      setSubmissionError('Failed to submit the form. Please try again later.');
      console.error('Error submitting form:', error);
    }
  };
  
  const changeIcon = (hovering: boolean) => {
    setIsHovered(hovering);
  };

  return (
    <section className="popup">
      <aside className="popup-content">
        {!submitted ? (
          <article>
            <button
              className="close-button"
              onMouseEnter={() => changeIcon(true)}
              onMouseLeave={() => changeIcon(false)}
              onClick={() => {
                handleLinkClick('Contact Form: Close');
                closePopup();
              }}
            >
              <i className={isHovered ? 'fa-solid fa-circle-xmark' : 'fa-regular fa-circle-xmark'}></i>
            </button>

            <h2>Contact</h2>

            {formErrors && (
              <div className="error-message">
                <i className="fa-solid fa-circle-exclamation"></i>&nbsp;All fields are required
              </div>
            )}

            {submissionError && (
              <div className="error-message">
                <i className="fa-solid fa-triangle-exclamation"></i>&nbsp;{submissionError}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">
                  Name&nbsp;<span className="colored">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">
                  Email Address&nbsp;<span className="colored">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">
                  Message&nbsp;<span className="colored">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                onClick={() => {handleLinkClick('Contact Form: Submit');}}>
                Submit
              </button>
            </form>
          </article>
        ) : (
          <div className="success-message">
            <h3>Form Submitted Successfully!</h3>
            <p>{successMessage}</p>
          </div>
        )}
      </aside>
    </section>
  );
};

export default AppPopup;
