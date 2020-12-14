declare module 'emergence.js' {
  interface Emergence {
    init: () => void;
  }

  const emergence: Emergence;
  export default emergence;
}

declare module 'react-d3-cloud' {
  import React from 'react';

  export interface Word {
    text: string;
    value: number;
  }
  export interface WordCloud {
    data: Word[];
    width?: number;
    height?: number;
    fontSizeMapper?: (word: Word, idx: number) => number;
    rotate?: (word: Word) => number;
    padding?: number;
    font?: string;
    onWordClick?: (word: Word) => void;
  }

  const WordCloudComp: React.SFC<WordCloud>;
  export default WordCloudComp;
}
