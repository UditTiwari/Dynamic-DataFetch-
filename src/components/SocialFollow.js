import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  FaReddit
} from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  return (
    
    <div className="social-container">
      <h5>@copyright</h5>
      <a
        href="https://www.youtube.com/"
        className="youtube social"
      >
        <FontAwesomeIcon  icon={faYoutube }  size="2x" />
      </a>
      <a
        href="https://www.facebook.com//"
        className="facebook social"
      >
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="https://twitter.com/explore" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a
        href="https://www.instagram.com/"
        className="instagram social"
      >
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
    </div>
  );
}

