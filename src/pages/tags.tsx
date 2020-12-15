import React, { useCallback, useMemo } from 'react';
import { navigate, graphql } from 'gatsby';
import TagCloud from 'react-tag-cloud';
import randomcolor from 'randomcolor';
import { Button } from '@material-ui/core';

import { Meta } from 'src/components/meta';
import { Layout } from 'src/components/layout';
import { useForceUpdate } from 'src/hooks/useForceUpdate';

import { siteMetadata } from '../../gatsby-config';
import './tags.scss';

interface Word {
  text: string;
  value: number;
}

interface Props {
  data: { tags: { group: Word[] } };
  location: Location;
}

const Tags = ({ location, data }: Props) => {
  const forceUpdate = useForceUpdate();
  const words = useMemo(() => {
    return data.tags.group.map((word) => {
      return {
        text: word.text.toUpperCase(),
        value: word.value
      };
    });
  }, [data]);

  const onClickWord = useCallback((word: string) => {
    navigate(`/tag/${word.toLowerCase()}`);
  }, []);

  return (
    <Layout isFooter={false} location={location}>
      <Meta site={siteMetadata} title="Tags" />
      <div className="article">
        <div className="container tag-container">
          <TagCloud
            style={{
              fontFamily: 'NanumBarunGothic',
              fontWeight: 'bold',
              color: () =>
                randomcolor({
                  luminosity: 'light'
                }),
              padding: 5
            }}
          >
            {words.map((word, idx) => (
              <div
                key={idx}
                className="tag-item"
                onClick={() => onClickWord(word.text)}
                style={{ fontSize: word.value * 25 }}
              >
                {word.text}
              </div>
            ))}
          </TagCloud>
        </div>
        <div className="tag-footer">
          <Button className="reset-btn" variant="outlined" size="small" onClick={forceUpdate}>
            reset
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default Tags;

export const query = graphql`
  query TagsPageQuery {
    tags: allMarkdownRemark {
      group(field: frontmatter___tags) {
        text: fieldValue
        value: totalCount
      }
    }
  }
`;
