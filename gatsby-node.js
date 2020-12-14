const path = require('path');
const PostTemplate = path.resolve('./src/templates/index.tsx');
const TagTemplate = path.resolve('./src/templates/tag/index.tsx');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allFile(filter: { extension: { regex: "/md|tsx/" } }, limit: 1000) {
              edges {
                node {
                  id
                  name: sourceInstanceName
                  path: absolutePath
                  remark: childMarkdownRemark {
                    id
                    frontmatter {
                      layout
                      path
                    }
                  }
                }
              }
            }
            tags: allMarkdownRemark(limit: 2000) {
              group(field: frontmatter___tags) {
                fieldValue
              }
            }
          }
        `
      ).then(({ errors, data }) => {
        if (errors) {
          console.log(errors);
          reject(errors);
        }

        // Create blog posts & pages.
        const items = data.allFile.edges;
        const posts = items.filter(({ node }) => /posts/.test(node.name));
        posts.forEach(({ node }) => {
          if (!node.remark) return;
          const { path } = node.remark.frontmatter;
          createPage({
            path,
            component: PostTemplate
          });
        });

        const pages = items.filter(({ node }) => /page/.test(node.name));
        pages.forEach(({ node }) => {
          if (!node.remark) return;
          const { name } = path.parse(node.path);
          const PageTemplate = path.resolve(node.path);
          createPage({
            path: name,
            component: PageTemplate
          });
        });

        console.log('data.tags', data.tags);
        const { group: tags } = data.tags;
        tags.forEach((tag) => {
          createPage({
            path: `/tag/${tag.fieldValue}/`,
            component: TagTemplate,
            context: {
              tag: tag.fieldValue
            }
          });
        });
      })
    );
  });
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        src: path.resolve(__dirname, 'src')
      }
    }
  });
};
