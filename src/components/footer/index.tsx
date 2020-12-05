import React from 'react';
import { Link } from 'gatsby';

import './style.scss';

interface Props {
  author: string;
  title: string;
}

export const Footer = ({ author, title }: Props) => (
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
