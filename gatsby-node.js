const each = require('lodash/each');
const path = require('path');

const PostTemplate = path.resolve('./src/templates/index.js');
const TagTemplate = path.resolve('./src/templates/tag/index.js');
const CategoryTemplate = path.resolve('./src/templates/category/index.js');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allFile(filter: { extension: { regex: "/md|js/" } }, limit: 1000) {
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
            categories: allMarkdownRemark(limit: 2000) {
              group(field: frontmatter___category) {
                fieldValue
              }
            }
          }
        `
      ).then(({ errors, data }) => {
        if (errors) {
          // eslint-disable-next-line no-console
          console.log(errors);
          reject(errors);
        }

        // Create blog posts & pages.
        const items = data.allFile.edges;
        const posts = items.filter(({ node }) => /posts/.test(node.name));

        each(posts, ({ node }) => {
          if (!node.remark) return;
          const { path: postPath } = node.remark.frontmatter;

          createPage({
            path: postPath,
            component: PostTemplate
          });
        });

        const { group: tags } = data.tags;

        // Make tag pages
        tags.forEach(tag => {
          createPage({
            path: `/tag/${tag.fieldValue}/`,
            component: TagTemplate,
            context: {
              tag: tag.fieldValue
            }
          });
        });

        const { group: categories } = data.categories;

        // Make tag pages
        categories.forEach(category => {
          createPage({
            path: `/category/${category.fieldValue}/`,
            component: CategoryTemplate,
            context: {
              category: category.fieldValue
            }
          });
        });

        const pages = items.filter(({ node }) => /page/.test(node.name));

        each(pages, ({ node }) => {
          if (!node.remark) return;
          const { name } = path.parse(node.path);
          const PageTemplate = path.resolve(node.path);

          createPage({
            path: name,
            component: PageTemplate
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
        components: path.resolve(__dirname, 'src/components'),
        templates: path.resolve(__dirname, 'src/templates'),
        scss: path.resolve(__dirname, 'src/scss')
      }
    }
  });
};
