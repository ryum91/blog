import React from 'react';
import { Link, graphql } from 'gatsby';
import { Layout } from 'src/components/layout';
import { Meta } from 'src/components/meta';
import { siteMetadata } from '../../../gatsby-config';

interface Props {
  pageContext: any;
  data: any;
  location: Location;
}

const Tags = ({ pageContext, data, location }: Props) => {
  const { tag } = pageContext;
  const { tags, totalCount } = data.data;
  const header = `"${tag.toUpperCase()}" results ${totalCount} post${totalCount === 1 ? '' : 's'}`;

  return (
    <Layout location={location}>
      <Meta site={siteMetadata} title={`${tag.toUpperCase()} Tag`} />
      <div className="article">
        <div className="container">
          <h1>{header}</h1>
          <ul>
            {tags.map(({ node }: any) => {
              const { title, path } = node.frontmatter;

              return (
                <li key={path}>
                  <Link to={path}>{title}</Link>
                </li>
              );
            })}
          </ul>
          <Link to="/tags/">Back</Link>
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
