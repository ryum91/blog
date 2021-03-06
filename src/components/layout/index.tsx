import React, { useEffect } from 'react';
import emergence from 'emergence.js';

import { Navibar } from 'src/components/navibar';
import { siteMetadata } from '../../../gatsby-config';

import 'modern-normalize/modern-normalize.css';
import 'prismjs/themes/prism.css';
import 'src/scss/gatstrap.scss';
import 'animate.css/animate.css';
import 'src/scss/common.scss';

interface Props {
  children?: React.ReactNode;
  location: Location;
}

export const Layout = ({ children, location }: Props) => {
  useEffect(() => {
    emergence.init();
  }, []);

  return (
    <div>
      <Navibar title={siteMetadata.title} location={location} />
      {children}
    </div>
  );
};
