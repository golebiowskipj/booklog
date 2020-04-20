import React from 'react';
import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import { Nav } from "../components/Nav";

const GlobalStyle = createGlobalStyle`
    *, 
    *::before, 
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html,
    body {
        margin-top: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
        font-size: 18px;
        line-height: 1.4;
    }

    h1, h2, h3, h4, h5, h6 {
        line-height: 1.1;

        & + * {
            margin-top: .5rem;
        }
    }
`;

const MainStyled = styled.main`
    margin: 2rem 0 auto;
`;

export const Layout = (props) => {
    return (
        <>
            <GlobalStyle />
            <Nav />
            <MainStyled>
                {props.children}
            </MainStyled>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}
