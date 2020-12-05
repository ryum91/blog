import React, { useRef, useLayoutEffect } from 'react';

export const Utterances = React.memo(() => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const utterances = document.createElement('script');

    const attributes = {
      src: 'https://utteranc.es/client.js',
      repo: 'ryum91/blog',
      'issue-term': 'pathname',
      label: 'comment',
      theme: 'dark-blue',
      crossOrigin: 'anonymous',
      async: 'true'
    };

    Object.entries(attributes).forEach(([key, value]) => {
      utterances.setAttribute(key, value);
    });

    containerRef?.current?.appendChild(utterances);
  });

  return <div ref={containerRef} />;
});

Utterances.displayName = 'Utterances';
