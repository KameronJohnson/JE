const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = ({boundActionCreators, graphql}) => {
    const {createPage} = boundActionCreators;

    const postTemplate = path.resolve('src/templates/blog-post.js');

    //this query returns all markdown files
    return graphql(`{
        allMarkdownRemark {
            edges {
                node {
                    html
                    id
                    frontmatter {
                        path
                        title
                    }
                }
            }
        }
    }`)
    .then(result => {
        if (result.errors) {
            return Promise.reject(result.errors);
        }
        const posts = result.data.allMarkdownRemark.edges

        posts.forEach( (post, index) => {
            const previous = index === posts.length - 1 ? null : posts[index + 1].node
            const next = index === 0 ? null : posts[index - 1].node

            createPage({
                path: post.node.frontmatter.path,
                component: postTemplate,
                context: {
                    previous,
                    next,
                },
            })
        })
    })
}

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
    const { createNodeField } = boundActionCreators

    if (node.internal.type === `MarkdownRemark`) {
        const value = createFilePath({ node, getNode })
        createNodeField({
            node,
            value,
        })
    }
}
