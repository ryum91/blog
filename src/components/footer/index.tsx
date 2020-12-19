import React from 'react';
import { Link } from 'gatsby';
import Img, { FixedObject } from 'gatsby-image';
import Icon from '@mdi/react';
import { mdiGithub, mdiLinkedin, mdiTwitter, mdiEmail } from '@mdi/js';

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
            카카오페이에서 프론트엔드 개발을 하고 있습니다. 인프라/서버개발 등 각종 개발 지식에도
            관심이 많아요.
          </span>
          <div className="link">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="mr5"
              href="https://github.com/ryum91"
            >
              <Icon
                path={mdiGithub}
                title="GitHub"
                color="#a5a5a5"
                size="15px"
                className="hover-zoom clickable"
              />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="mr5"
              href="https://www.linkedin.com/in/charyum-park/"
            >
              <Icon
                path={mdiLinkedin}
                title="Linkedin"
                color="#a5a5a5"
                size="15px"
                className="hover-zoom clickable"
              />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="mr5"
              href="https://twitter.com/ryum91"
            >
              <Icon
                path={mdiTwitter}
                title="Twitter"
                color="#a5a5a5"
                size="15px"
                className="hover-zoom clickable"
              />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="mailto:ryum91@gmail.com">
              <Icon
                path={mdiEmail}
                title="Email"
                color="#a5a5a5"
                size="15px"
                className="hover-zoom clickable"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);
