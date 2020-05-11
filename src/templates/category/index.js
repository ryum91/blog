import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from 'components/layout';
import Meta from 'components/meta';
import { siteMetadata } from '../../../gatsby-config';

const Category = ({ pageContext, data, location }) => {
  const { category } = pageContext;
  const { categories, totalCount } = data.data;
  const header = `"${category}" Category results ${totalCount} post${totalCount === 1 ? '' : 's'}`;

  return (
    <Layout footer={false} location={location}>
      <Meta site={siteMetadata} title={`${category} Category`} />
      <div className="article">
        <div className="container">
          <h1>{header}</h1>
          <ul>
            {categories.map(({ node }) => {
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

export default Category;

export const pageQuery = graphql`
  query($category: String) {
    data: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { in: [$category] } } }
    ) {
      totalCount
      categories: edges {
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
