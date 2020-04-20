import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

const NavStyled = styled.nav`
    width: 100%;
    padding: 1rem;
    display: flex;
    align-items: center;

    border: 1px solid black;
`;

const LinkStyled = styled(Link)`
    text-decoration: none;
`;

const ImageContainer = styled.div`
    width: 1.5rem;
    margin-right: .33rem;
`;

export const Nav = () => {
    const { image } = useStaticQuery(graphql`
        query {
            image: file(relativePath: {eq: "logo.png"}) {
                sharp: childImageSharp {
                    fluid (maxHeight: 46)  {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `);

    return (
        <NavStyled>
            <ImageContainer>
                <Image fluid={image.sharp.fluid} />
            </ImageContainer>
            <LinkStyled to="/">Booklog</LinkStyled>
        </NavStyled>
    );
};
