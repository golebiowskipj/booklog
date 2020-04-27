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
            booktitle
            slug
            image {
              sharp: childImageSharp {
                fluid (
                  maxWidth: 250
                  maxHeight: 250
                  ) {
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
    booktitle: post.frontmatter.booktitle,
    slug: post.frontmatter.slug,
    image: post.frontmatter.image
  }))
};
