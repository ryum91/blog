import React from 'react';
import { graphql } from 'gatsby';
import { TagCloud } from 'react-tagcloud';
import Layout from 'components/layout';
import './category.scss';

class Category extends React.Component {
  render() {
    const { location } = this.props;

    const { group: tags } = this.props.data.tags;
    const { group: category } = this.props.data.category;

    return (
      <Layout footer={false} location={location}>
        <div className="article">
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
              onClick={tag => console.log('click', tag)}
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
              onClick={tag => console.log('click', tag)}
            />
          </div>
        </div>
      </Layout>
    );
  }
}

export default Category;

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
