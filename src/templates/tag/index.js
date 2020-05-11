import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from 'components/layout';
import Meta from 'components/meta';
import { siteMetadata } from '../../../gatsby-config';

const Tags = ({ pageContext, data, location }) => {
  const { tag } = pageContext;
  const { tags, totalCount } = data.data;
  const header = `"${tag}" Tag results ${totalCount} post${totalCount === 1 ? '' : 's'}`;

  return (
    <Layout footer={false} location={location}>
      <Meta site={siteMetadata} title={`${tag} Tag`} />
      <div className="article">
        <div className="container">
          <h1>{header}</h1>
          <ul>
            {tags.map(({ node }) => {
              const { title, path } = node.frontmatter;

              return (
                <li key={path}>
                  <Link to={path}>{title}</Link>
                </li>
              );
            })}
          </ul>
          <Link to="/categories/">Back</Link>
        </div>
      </div>
    </Layout>
  );
};

export default Tags;

export const pageQuery = graphql`
  query($tag: String) {
    data: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      tags: edges {
        node {
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`;
