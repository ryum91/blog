import React, { useEffect } from 'react';
import emergence from 'emergence.js';
import 'modern-normalize/modern-normalize.css';
import 'prismjs/themes/prism.css';
import 'scss/gatstrap.scss';
import 'animate.css/animate.css';
import 'font-awesome/css/font-awesome.css';

import Navi from 'components/navi';
import Footer from 'components/footer';
import { siteMetadata } from '../../../gatsby-config';

const Layout = props => {
  const { children, footer = true } = props;

  useEffect(() => {
    emergence.init();
  });

  return (
    <div>
      <Navi title={siteMetadata.title} {...props} />
      {children}
      {footer && <Footer title={siteMetadata.title} author={siteMetadata.author} />}
    </div>
  );
};

export default Layout;
