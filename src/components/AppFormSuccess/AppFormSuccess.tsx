import React from 'react';
import './FormSuccess.css';

const FormSuccess: React.FC = () => {
  return (
    <div className="success-message">
      <p>
        <b><i className="fa-solid fa-envelope-circle-check"></i></b><br />
        Message Sent!
      </p>
    </div>
  );
};

export default FormSuccess;
