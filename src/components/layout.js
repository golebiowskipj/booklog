import React from 'react';
import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import { Nav } from "./Nav";

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
        font-family: 'Noto Sans', Arial, sans-serif;
        font-weight: 400;
        font-size: 18px;
        line-height: 1.4;
        padding-bottom: 2rem;
    }

    h1, h2, h3, h4, h5, h6 {
        line-height: 1.1;
        font-weight: 700;

        & + * {
            margin-top: .5rem;
        }
    }
`;

const MainStyled = styled.main`
    width: 90vw;
    margin: 0 auto;
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
