import React from 'react';
import { Link } from 'gatsby';
import Img, { FixedObject } from 'gatsby-image';

import { Icon } from 'src/components/icon';

import './style.scss';

export const Footer = () => (
  <div className="footer">
    <div className="container">
      <br />
      <div className="footer-container">
        <Img
          fixed={
            {
              src: '/img/profile.jpg',
              width: 50,
              height: 50
            } as FixedObject
          }
          className="rounded-circle"
        />
        <div className="profile">
          <Link to="/about/">RYUM</Link>
          <span>
            카카오페이에서 Front-end 개발을 하고 있습니다.
            <br />
            인프라/서버개발 등 각종 개발 지식에도 관심이 많아요.
          </span>
          <div className="link">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
              href="https://github.com/ryum91"
            >
              <Icon title="Github" name="github" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
              href="https://www.linkedin.com/in/charyum-park/"
            >
              <Icon title="Linkedin" name="linkedin" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
              href="https://twitter.com/ryum91"
            >
              <Icon title="Twitter" name="twitter" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);
