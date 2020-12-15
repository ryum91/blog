declare module 'emergence.js' {
  interface Emergence {
    init: () => void;
  }

  const emergence: Emergence;
  export default emergence;
}

declare module 'react-tag-cloud' {
  import React from 'react';

  export interface TagCloud {
    className: string;
    style: any;
  }

  const TagCloudComp: React.SFC<TagCloud>;
  export default TagCloudComp;
}
