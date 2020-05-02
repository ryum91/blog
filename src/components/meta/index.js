import React from "react";
import Helmet from "react-helmet";
import get from "lodash/get";

const Meta = ({ site, title }) => {
  const url = get(site, "url") || get(site, "siteUrl");
  const siteTitle = get(site, "title");
  title = title ? `${title} | ${siteTitle}` : siteTitle;
  return (
    <Helmet
      title={title}
      meta={[
        { property: "og:title", content: title },
        {
          property: "og:description",
          content: get(site, "description")
        },
        {
          property: "og:image",
          content: `${url}/img/profile.jpg`
        }
      ]}
    />
  );
};
export default Meta;
