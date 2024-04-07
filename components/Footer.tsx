import React from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer: React.FC = (): JSX.Element => {
  return (
    <div className="footerContainer">
      <div className="footer">
        <div className="footer-title">
          <img className="school-logo" src="/logo.jpeg" alt="logo" />
          <div>SRI SANGAMESHVARA SCHOOL</div>
        </div>
        <div className="footer-description">
          Sri Sangameswara EM School, where we foster a nurturing environment
          for holistic learning and growth. With a focus on excellence and
          innovation, we empower students to realize their fullest potential
        </div>
        <div className="footer-content">
          <div className="contact-us">
            <div className="contact-us-title">Contact Us</div>
            <div className="footer-address-container">
              <div className="footer-address">
                <LocationOnOutlinedIcon fontSize="large" />
                <p>
                  Sri Sangameshvara School, Kuderu,Anantapur, Andhra
                  Pradesh-524321
                </p>
              </div>
              <div className="footer-address">
                <CallOutlinedIcon fontSize="large" />
                <p>+91 799 255 8000 , +91 799 255 8001</p>
              </div>
              <div className="footer-address">
                <MailOutlinedIcon fontSize="large" />
                <p>xNt5c@example.com</p>
              </div>
            </div>
          </div>
          <div className="contact-us">
            <div className="contact-us-title">Quick Links</div>
            <div className="footer-address-container">
              <div className="footer-address">
                <ArrowRightOutlinedIcon fontSize="medium" />
                <p style={{ cursor: "pointer" }}>Admissions</p>
              </div>
              <div className="footer-address">
                <ArrowRightOutlinedIcon fontSize="medium" />
                <p style={{ cursor: "pointer" }}>About Us</p>
              </div>
            </div>
          </div>
          <div className="follow-us">
            <p className="contact-us-title">Follow Us</p>
            <div className="social-icons">
              <FacebookOutlinedIcon fontSize="large" />
              <WhatsAppIcon fontSize="large" />
              <YouTubeIcon fontSize="large" />
            </div>
          </div>
          <div className="follow-us">
            <p className="contact-us-title">About us</p>
            <div>
              Established in 1995, Sri Sangameswara School has emerged as a
              shining beacon of quality education, dedication, and innovation in
              Anantapur kuderu Area. With an unwavering commitment to nurturing
              young minds, we take immense pride in celebrating our successful
              completion of 28 years in the field of education.
            </div>
          </div>
        </div>
        <div className="copyright">
          © 2024 Sri Sangameshvara School. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
