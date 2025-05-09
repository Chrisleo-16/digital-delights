import React from "react";

const Footer = () => (
  <footer style={{ background: "#0a0a0a", color: "#fff" }}>
    <div className="container-fluid px-0" style={{ borderTop: "1px solid #222" }}>
      <div className="row gx-0 gy-4 p-5">
        {/* Brand */}
        <div className="col-md-3 d-flex flex-column align-items-start px-5">
          <h5 style={{ color: "#00bfff", marginBottom: "1rem" }}>Digital Delights</h5>
          <p style={{ fontSize: "0.9rem", lineHeight: 1.6 }}>
            Elevate your gaming experience with top-tier gear and cutting-edge tech. Stay ahead, play better.
          </p>
        </div>

        {/* Contact */}
        <div className="col-md-3 d-flex flex-column align-items-start px-5">
          <h6 style={{ color: "#00bfff", marginBottom: "1rem" }}>Contact Us</h6>
          <p style={{ fontSize: "0.9rem", lineHeight: 1.6 }}>
            123 Gamer Street<br />Nairobi, Kenya<br />+254 700 000000<br />support@digitaldelights.com
          </p>
        </div>

        {/* Social Links */}
        <div className="col-md-3 d-flex flex-column align-items-start px-5">
          <h6 style={{ color: "#00bfff", marginBottom: "1rem" }}>Connect with Us</h6>
          <div className="d-flex gap-3" style={{ fontSize: "1.4rem" }}>
            <a href="#" className="text-white"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="text-white"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-white"><i className="fab fa-instagram"></i></a>
            <a href="#" className="text-white"><i className="fab fa-youtube"></i></a>
          </div>
        </div>

        {/* Newsletter */}
        <div className="col-md-3 d-flex flex-column align-items-start px-5">
          <h6 style={{ color: "#00bfff", marginBottom: "1rem" }}>Subscribe</h6>
          <p style={{ fontSize: "0.9rem", lineHeight: 1.6 }}>Get the latest deals and news straight to your inbox.</p>
          <div className="d-flex w-100" style={{ maxWidth: "min(300px,100%)" }}>
            <input
              type="email"
              placeholder="Your email"
              className="form-control"
              style={{ borderRadius: "0.25rem 0 0 0.25rem", border: "1px solid #444", background: "#1f1f1f", color: "#fff" }}
            />
            <button
              className="btn"
              style={{
                background: "#00bfff",
                color: "#0a0a0a",
                fontWeight: "bold",
                borderRadius: "0 0.25rem 0.25rem 0",
                border: "none"
              }}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="text-center py-3" style={{ background: "#090909", fontSize: "0.8rem", color: "#666" }}>
        &copy; {new Date().getFullYear()} Digital Delights. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
