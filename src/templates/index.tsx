import React from 'react';
import { graphql } from 'gatsby';

import { Meta } from 'src/components/meta';
import { Layout } from 'src/components/layout';
import { PostByPathQuery } from 'graphql-types';

import { Post } from './post';
import { Page } from './page';

interface Props {
  data: PostByPathQuery;
  location: Location;
}

const Template = ({ data, location }: Props) => {
  const isPage = data.post?.frontmatter?.layout != 'page';
  return (
    <div>
      <Layout location={location}>
        <Meta title={data.post?.frontmatter?.title || ''} site={data.site?.meta} />
        {isPage ? (
          <Post
            data={data}
            options={{
              isIndex: false,
              adsense: data.site?.meta?.adsense
            }}
          />
        ) : (
          <Page data={data} location={location} />
        )}
      </Layout>
    </div>
  );
};

export default Template;

export const pageQuery = graphql`
  query PostByPath($path: String!) {
    site {
      meta: siteMetadata {
        title
        description
        siteUrl
        author
        twitter
        adsense
      }
    }
    post: markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      frontmatter {
        layout
        title
        path
        tags
        description
        date(formatString: "YYYY.MM.DD")
        image {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
