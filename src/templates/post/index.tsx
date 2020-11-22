import React from 'react';
import { Link } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';

import { Adsense } from 'src/components/adsense';
import { Button } from 'src/components/button';
import { Badge } from 'src/components/badge';
import { PostByPathQuery } from 'src/types/graphql-types';

import './style.scss';

const getDescription = (content: string): string => {
  const body = content.replace(
    /<blockquote>/g,
    '<blockquote class="blockquote">'
  );
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
  const { isIndex, adsense } = options;
  const html = data.post?.html || '';
  const isMore = isIndex && !!html.match('<!--more-->');

  return (
    <div className="article" key={path}>
      <div className="container">
        <div className="info">
          <Link style={{ boxShadow: 'none' }} to={path}>
            <h1>{frontmatter?.title}</h1>
            <time dateTime={frontmatter?.date}>{frontmatter?.date}</time>
          </Link>
          <Badge label={frontmatter?.category || ''} primary={true} />
          {(frontmatter?.tags || []).map((tag, index) => (
            <Badge label={tag as string} primary={false} key={index} />
          ))}
        </div>
        <div className="content">
          <p>{frontmatter?.description}</p>
          {image?.childImageSharp?.fluid && (
            <Img
              fluid={image.childImageSharp.fluid as FluidObject}
              style={{ display: 'block', margin: '0 auto' }}
            />
          )}
        </div>
        <div
          className="content"
          dangerouslySetInnerHTML={{
            __html: isMore ? getDescription(html) : html
          }}
        />
        {isMore && <Button path={path} label="MORE" primary={true} />}
        {!isIndex && <Adsense clientId={adsense} slotId="" format="auto" />}
      </div>
    </div>
  );
};
