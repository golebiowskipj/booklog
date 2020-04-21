import { graphql, useStaticQuery } from 'gatsby';

export const usePosts = () => {
  const data = useStaticQuery(graphql`
    query {
        allMdx
        (
          sort: { fields: [frontmatter___date], order: DESC }
          filter: { frontmatter: { published: { eq: true } } }
        )
        {
        nodes {
          frontmatter {
            title
            slug
            image {
              sharp: childImageSharp {
                fluid  {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
`);

  return data.allMdx.nodes.map(post => ({
    title: post.frontmatter.title,
    slug: post.frontmatter.slug,
    image: post.frontmatter.image
  }))
};
