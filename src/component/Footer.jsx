import { Facebook, Instagram, Twitter, X } from "@mui/icons-material";
import React from "react";

const Footer = () => {
  return (
    <div className="footer text-center py-4">
      <div className="socialMedia">
        <p className="fs-5">&copy;2024 burgerci.xyz</p>
        <Instagram className="fs-1" />
        <Twitter className="fs-1" />
        <Facebook className="fs-1" />
      </div>
    </div>
  );
};

export default Footer;
