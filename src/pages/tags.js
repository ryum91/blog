import React from 'react';
import { graphql } from 'gatsby';
import { TagCloud } from 'react-tagcloud';
import Layout from 'components/layout';
import './tags.scss';

class Tags extends React.Component {
  render() {
    const { location } = this.props;
    const { group: data } = this.props.data.allMarkdownRemark;

    return (
      <Layout footer={false} location={location}>
        <div className="article">
          <div className="tag-cloud-wrap">
            <TagCloud
              minSize={20}
              maxSize={25}
              tags={data.map(e => {
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

export default Tags;

export const query = graphql`
  query TagsPageQuery {
    allMarkdownRemark {
      group(field: frontmatter___tags) {
        tag: fieldValue
        totalCount
      }
    }
  }
`;
