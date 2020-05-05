import React from 'react';
import { Link } from 'gatsby';
import './style.scss';

const Footer = ({ author, title }) => (
  <div className="footer">
    <div className="container">
      <p>
        {title}
        <Link to="/profile/">
          <br />
          <strong>{author}</strong> on Profile
        </Link>
      </p>
    </div>
  </div>
);

export default Footer;
