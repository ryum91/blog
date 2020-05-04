import React from "react";

export default class HTML extends React.Component {
  render() {
    return (
      <html lang="ko">
        <head>
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-106652933-3"></script>
          <script dangerouslySetInnerHTML={{
            __html: 'window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag("js", new Date()); gtag("config", "UA-106652933-3");'
          }}>
          </script>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          {/* <script src="https://kit.fontawesome.com/7c896a6b36.js" crossorigin="anonymous"></script> */}
          {this.props.headComponents}
          <link
            href="/img/apple-touch-icon.png"
            rel="apple-touch-icon"
            sizes="180x180"
          />
          <link href="/img/favicon.ico" rel="icon" type="image/x-icon" />
        </head>
        <body>
          <div
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
          <script
            async
            src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          />
        </body>
      </html>
    );
  }
}
