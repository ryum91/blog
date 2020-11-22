import React from 'react';

import { PostByPathQuery } from 'src/types/graphql-types';

import './style.scss';

interface Props {
  data: PostByPathQuery;
  location: Location;
}

export const Page = ({ data }: Props) => {
  return data.post?.html ? (
    <div dangerouslySetInnerHTML={{ __html: data.post.html }} />
  ) : (
    <></>
  );
};
