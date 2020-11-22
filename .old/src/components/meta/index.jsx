import React from 'react';
import Helmet from 'react-helmet';
import get from 'lodash/get';

const Meta = ({ site, title }) => {
  const url = get(site, 'url') || get(site, 'siteUrl');
  const siteTitle = get(site, 'title');
  const contentTitle = title ? `${title} | ${siteTitle}` : siteTitle;

  return (
    <Helmet
      title={contentTitle}
      meta={[
        { property: 'og:title', content: contentTitle },
        {
          property: 'og:description',
          content: get(site, 'description')
        },
        {
          property: 'og:image',
          content: `${url}/img/dev_ryum.jpg`
        }
      ]}
    />
  );
};

export default Meta;
