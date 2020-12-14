import React, { useCallback, useMemo } from 'react';
import { navigate, graphql } from 'gatsby';
import { Meta } from 'src/components/meta';
import { Layout } from 'src/components/layout';
import { siteMetadata } from '../../gatsby-config';

import WordCloud, { Word } from 'react-d3-cloud';

interface Props {
  data: { tags: { group: Word[] } };
  location: Location;
}

const Tags = ({ location, data }: Props) => {
  const words = useMemo(() => {
    return data.tags.group.map((word) => {
      return {
        text: word.text.toUpperCase(),
        value: word.value
      };
    });
  }, [data]);

  const fontSizeMapper = useCallback((word: Word) => word.value * 25, []);
  const onWordClick = useCallback((word: Word) => {
    navigate(`/tag/${word.text.toLowerCase()}`);
  }, []);

  return (
    <Layout isFooter={false} location={location}>
      <Meta site={siteMetadata} title="Tags" />
      <div className="article">
        <div className="container tag-container">
          <WordCloud
            data={words}
            font="NanumBarunGothic"
            padding={20}
            width={document.body.offsetWidth - 30}
            height={document.body.offsetHeight * 0.6}
            fontSizeMapper={fontSizeMapper}
            onWordClick={onWordClick}
          />
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
