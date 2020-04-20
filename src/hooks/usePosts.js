import { graphql, useStaticQuery } from 'gatsby';

export const usePosts = () => {
    const data = useStaticQuery(graphql`
    query {
        allMdx {
        nodes {
          frontmatter {
            title
            slug
            image {
              sharp: childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          excerpt
        }
      }
    }
`);

    return data.allMdx.nodes.map(post => ({
        title: post.frontmatter.title,
        slug: post.frontmatter.slug,
        date: post.frontmatter.date,
        published: post.frontmatter.published,
        excerpt: post.excerpt,
        image: post.frontmatter.image
    }))
};
