import React from 'react';
import { navigate, graphql } from 'gatsby';
import Meta from 'components/meta';
import { TagCloud } from 'react-tagcloud';
import Layout from 'components/layout';
import './categories.scss';
import { siteMetadata } from '../../gatsby-config';

class Categories extends React.Component {
  render() {
    const { location } = this.props;

    const { group: tags } = this.props.data.tags;
    const { group: category } = this.props.data.category;

    return (
      <Layout footer={false} location={location}>
        <Meta site={siteMetadata} title="Categories" />
        <div className="article">
          <div className="container">
            <div className="sub-title">Category</div>
            <div className="tag-cloud-wrap">
              <TagCloud
                minSize={15}
                maxSize={15}
                tags={category.map(e => {
                  return {
                    value: e.value,
                    count: e.totalCount
                  };
                })}
                disableRandomColor={true}
                shuffle={false}
                onClick={tag => navigate(`/category/${tag.value}`)}
              />
            </div>
            <hr />
            <div className="sub-title">Tags</div>
            <div className="tag-cloud-wrap">
              <TagCloud
                minSize={20}
                maxSize={25}
                tags={tags.map(e => {
                  return {
                    value: e.tag,
                    count: e.totalCount
                  };
                })}
                colorOptions={{
                  luminosity: 'light',
                  hue: 'blue'
                }}
                onClick={tag => navigate(`/tag/${tag.value}`)}
              />
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Categories;

export const query = graphql`
  query TagsPageQuery {
    tags: allMarkdownRemark {
      group(field: frontmatter___tags) {
        tag: fieldValue
        totalCount
      }
    }
    category: allMarkdownRemark {
      group(field: frontmatter___category) {
        value: fieldValue
        totalCount
      }
    }
  }
`;
