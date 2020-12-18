import React from 'react';
import { graphql } from 'gatsby';

import { Meta } from 'src/components/meta';
import { Layout } from 'src/components/layout';
import { Post } from 'src/templates/post';
import { IndexQueryQuery, PostByPathQuery } from 'src/types/graphql-types';

interface Props {
  data: IndexQueryQuery;
  location: Location;
}

const BlogIndex = ({ data, location }: Props) => {
  const posts = data.remark.posts;
  const meta = data.site?.meta;

  return (
    <Layout location={location}>
      <Meta site={meta} />
      {posts.map((post, i) => (
        <Post
          data={post as PostByPathQuery}
          options={{
            isIndex: true
          }}
          key={i}
        />
      ))}
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query IndexQuery {
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
    remark: allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      posts: edges {
        post: node {
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
    }
  }
`;
