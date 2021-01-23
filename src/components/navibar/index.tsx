import React from 'react';
import { Link } from 'gatsby';

import './style.scss';

interface Props {
  title: string;
  location: Location;
}

export const Navibar = ({ location, title }: Props) => {
  return (
    <nav className="navbar navbar-expand navbar-dark flex-column flex-md-row bg-primary">
      <div className="container">
        <Link className="text-center" to="/">
          <h1 className="navbar-brand mb-0">{title}</h1>
        </Link>
        <div className="navbar-nav-scroll">
          <ul className="navbar-nav bd-navbar-nav flex-row">
            <li className={location.pathname === '/tags/' ? 'nav-item active' : 'nav-item'}>
              <Link to="/tags/" className="nav-link">
                Tags
              </Link>
            </li>
            <li className={location.pathname === '/about/' ? 'nav-item active' : 'nav-item'}>
              <Link to="/about/" className="nav-link">
                About
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-nav flex-row ml-md-auto d-none d-md-flex" />
      </div>
    </nav>
  );
};
