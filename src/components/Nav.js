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
    border-bottom: 1px solid black;
`;

const LinkStyled = styled(Link)`
    text-decoration: none;
    text-transform: uppercase;
    color: black;
    display: flex;
    align-items:center;
    letter-spacing: 1px;
`;

const ImageStyled = styled(Image)`
    width: 24px;
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
            <LinkStyled to="/">
                <ImageStyled fluid={image.sharp.fluid} />
                <p>Booklog</p>
            </LinkStyled>
        </NavStyled>
    );
};
