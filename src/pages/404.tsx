import React from 'react';

import { Meta } from 'src/components/meta';
import { Layout } from 'src/components/layout';

import { siteMetadata } from '../../gatsby-config';
import './404.scss';

interface Props {
  location: Location;
}

const NotFound = ({ location }: Props) => {
  return (
    <Layout location={location}>
      <Meta site={siteMetadata} title="Not Found" />
      <div className="not-found-article">
        <h1>404 Not Found</h1>
        <a href="/">Home</a>
      </div>
    </Layout>
  );
};

export default NotFound;
