import React from 'react';
import { Link } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';

import { Footer } from 'src/components/footer';
import { Adsense } from 'src/components/adsense';
import { Utterances } from 'src/components/utterances';
import { Badge } from 'src/components/badge';
import { PostByPathQuery } from 'src/types/graphql-types';

import './style.scss';

const getDescription = (content: string): string => {
  const body = content.replace(/<blockquote>/g, '<blockquote class="blockquote">');
  if (body.match('<!--more-->')) {
    const [description] = body.split('<!--more-->');
    return description;
  }
  return body;
};

interface Props {
  data: PostByPathQuery;
  options: {
    isIndex: boolean;
    adsense?: string | null;
  };
}

export const Post = ({ data, options }: Props) => {
  const frontmatter = data.post?.frontmatter;
  const path = frontmatter?.path || '';
  const image = frontmatter?.image || null;
  const { isIndex: isList, adsense } = options;
  const html = data.post?.html || '';
  const isMore = isList && !!html.match('<!--more-->');

  return (
    <div className="article" key={path}>
      <div className="container">
        <div className="info">
          <Link style={{ boxShadow: 'none' }} to={path}>
            <h1 className="title">{frontmatter?.title}</h1>
            <time dateTime={frontmatter?.date}>{frontmatter?.date}</time>
          </Link>
          {(frontmatter?.tags || []).map((tag, index) => (
            <Link key={index} to={`/tag/${tag}`}>
              <Badge label={tag as string} primary={false} />
            </Link>
          ))}
        </div>
        <div className="content">
          {!isList && image?.childImageSharp?.fluid && (
            <Img
              fluid={image.childImageSharp.fluid as FluidObject}
              style={{ display: 'block', margin: '0 auto' }}
            />
          )}
          {isMore && <p>{frontmatter?.description}</p>}
        </div>
        {!isList && (
          <div
            className="content"
            dangerouslySetInnerHTML={{
              __html: isMore ? getDescription(html) : html
            }}
          />
        )}
        {!isList && <Adsense clientId={adsense} slotId="" format="auto" />}
      </div>
      {!isList && <Footer />}
      {!isList && <Utterances />}
    </div>
  );
};
