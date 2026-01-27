import React from "react";
import { FaGem, FaMagic, FaRupeeSign } from "react-icons/fa";

const OffcanvasAbout = () => {
  return (
    <>
      <div className="container-fluid px-2">
        <h3 className="text-center text-danger fw-bold mt-2">
          About Royal Romance
        </h3>

        <p className="text-center small mb-4">
          Your one-stop destination for exquisite wedding attire and accessories.
          We bring elegance, tradition and modern fashion together.
        </p>

        <h5 className="text-danger text-center fw-bold">Our Mission</h5>
        <p className="text-center small mb-4">
          Every wedding is unique — and your outfit should be too.
        </p>

        <h5 className="text-danger text-center fw-bold mt-4">
          Our Values
        </h5>

       
        <div className="row mt-3">
          
          <div className="col-12 mb-3">
            <div className="hover-card">
              <div className="card-face card-top pink">
                <FaGem className="icon" />
                <h5>Quality Products</h5>
              </div>
              <div className="card-face card-bottom">
                <p>
                  Premium fabrics, rich embroidery and long-lasting materials.
                </p>
              </div>
            </div>
          </div>

          
          <div className="col-12 mb-3">
            <div className="hover-card">
              <div className="card-face card-top yellow">
                <FaMagic className="icon" />
                <h5>Trendy Designs</h5>
              </div>
              <div className="card-face card-bottom">
                <p>
                  Modern fashion blended with traditional elegance.
                </p>
              </div>
            </div>
          </div>

         
          <div className="col-12 mb-3">
            <div className="hover-card">
              <div className="card-face card-top blue">
                <FaRupeeSign className="icon" />
                <h5>Affordable Luxury</h5>
              </div>
              <div className="card-face card-bottom">
                <p>
                  Luxury wedding wear at affordable prices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <style>
        {`
          .hover-card {
            position: relative;
            height: 240px;
            border-radius: 14px;
            overflow: hidden;
            box-shadow: 0 10px 22px rgba(0,0,0,0.15);
            cursor: pointer;
          }

          .card-face {
            position: absolute;
            width: 100%;
            height: 100%;
            text-align: center;
            padding: 20px;
            transition: 0.4s ease;
          }

          .card-top {
            color: #fff;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          .icon {
            font-size: 36px;
          }

          .card-bottom {
            background: #fff;
            top: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .hover-card:hover .card-top {
            transform: translateY(-100%);
          }

          .hover-card:hover .card-bottom {
            top: 0;
          }

          .pink { background: #e56b8c; }
          .yellow { background: #f4b942; }
          .blue { background: #4aa3df; }
        `}
      </style>
    </>
  );
};

export default OffcanvasAbout;