import React, { useEffect } from 'react';
import emergence from 'emergence.js';

import { Navibar } from 'src/components/navibar';
import { Footer } from 'src/components/footer';
import { siteMetadata } from '../../../gatsby-config';

import 'modern-normalize/modern-normalize.css';
import 'prismjs/themes/prism.css';
import 'src/scss/gatstrap.scss';
import 'animate.css/animate.css';
import 'font-awesome/css/font-awesome.css';

interface Props {
  children?: React.ReactNode;
  location: Location;
  isFooter?: boolean;
}

export const Layout = ({ children, location, isFooter = true }: Props) => {
  useEffect(() => {
    emergence.init();
  });

  return (
    <div>
      <Navibar title={siteMetadata.title} location={location} />
      {children}
      {isFooter && (
        <Footer title={siteMetadata.title} author={siteMetadata.author} />
      )}
    </div>
  );
};
