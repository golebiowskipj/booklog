import { graphql, useStaticQuery } from 'gatsby';

export const useImagePlaceholder = () => {
    const { image } = useStaticQuery(graphql`
    query {
        image: file(relativePath: {eq: "beatriz-perez-moya.jpg"}) {
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
`);

    return image;
}