import React from "react";
import "../styles/Legal.css"; // Optional: create CSS file for styling

const Legal = () => {
  return (
    <div className="legal-page">
      <h2>Legal & Compliance</h2>

      <h3>Privacy Policy</h3>
      <p>
        At Evidura, your privacy is our top priority. We collect only the minimum 
        necessary information to provide our services and to ensure the security 
        and integrity of digital evidence. Personal data is stored securely and 
        accessed only by authorized personnel. We never share your information 
        with third parties without your explicit consent, except as required by law.
      </p>

      <h3>Terms of Service</h3>
      <p>
        By using Evidura’s platforms and services, you agree to abide by our 
        Terms of Service. This includes responsible use of our digital evidence 
        management tools, compliance with applicable laws, and refraining from 
        unauthorized access or misuse of data. Evidura reserves the right to 
        suspend or terminate accounts in case of violations.
      </p>

      <h3>Compliance & Security Standards</h3>
      <p>
        Evidura adheres to global best practices in data protection and digital 
        evidence handling. Our systems are compliant with ISO standards and GDPR 
        regulations, ensuring secure storage, encrypted transmission, and 
        auditable access logs. We are committed to maintaining the highest levels 
        of security, accountability, and transparency for all stakeholders.
      </p>

      <h3>Intellectual Property</h3>
      <p>
        All content, software, and technology provided by Evidura are the 
        intellectual property of Evidura. Users are prohibited from reproducing, 
        distributing, or creating derivative works without explicit written permission.
      </p>

      <h3>Contact for Legal Queries</h3>
      <p>
        For any questions related to our legal policies, compliance, or data 
        protection, please contact us at <a href="mailto:legal@evidura.in">legal@evidura.in</a>.
      </p>
    </div>
  );
};

export default Legal;
