import React from "react";

const OffcanvasContact = () => {
  return (
    <>
      <div className="container-fluid p-0">
        
        <div className="text-center mb-4">
          <h3 className="text-danger fw-bold mt-2">Contact Us</h3>
          <p className="small text-muted">
            Reach out to the creators of <b>Royal Romance</b>.  
            We’re here to help you with all wedding-related queries and guidance.
          </p>
        </div>

       
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 text-center">

            
            <p className="contact-label mb-1">Address</p>
            <p className="contact-text mb-3">
              123 Wedding Lane, Dream City  
              <span className="info-desc">(Next to Royal Palace Landmark)</span>
            </p>

            
            <p className="contact-label mb-1">Phone</p>
            <p className="contact-text mb-3">
              +91 98765 43210  
              <span className="info-desc">(Call or WhatsApp for quick support)</span>
            </p>

            
            <p className="contact-label mb-1">Email</p>
            <p className="contact-text mb-3">
              info@royalromance.com  
              <span className="info-desc">(For detailed queries & appointments)</span>
            </p>

            
            <p className="contact-label mb-1">Hours</p>
            <p className="contact-text mb-3">
              Mon - Sat (10AM - 7PM)  
              <span className="info-desc">(Closed on Sundays & public holidays)</span>
            </p>

           
            <p className="contact-label mb-1">Landmark</p>
            <p className="contact-text mb-0">
              Opposite to Grand Wedding Hall
            </p>
          </div>
        </div>
      </div>

      
      <style>{`
        .contact-label {
          font-weight: bold;
          font-size: 0.95rem;
          color: #8b3a62;
          margin-bottom: 4px;
        }

        .contact-text {
          font-size: 1rem;
          color: #3e1f2b;
          line-height: 1.8;
          margin-bottom: 15px;
        }

        .contact-text:hover {
          color: #a94b78;
        }

        .info-desc {
          display: block;
          font-size: 0.85rem;
          color: #555;
          margin-top: 2px;
        }

        @media (max-width: 768px) {
          .contact-label, .contact-text {
            text-align: center;
          }
        }
      `}</style>
    </>
  );
};

export default OffcanvasContact;