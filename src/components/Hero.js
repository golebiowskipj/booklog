import React from 'react';
import styled from 'styled-components';

const HeaderStyled = styled.header`
    padding: 2rem;
    width: 100%;
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items: center;
    text-align: center;

    @media(min-width: 767px) {
        padding: 4rem .5rem;
    }
`;

export const Hero = () => (
    <HeaderStyled>
        <h1>Booklog</h1>
        <p>bo nie pamiętam co przeczytałem dzień wcześniej</p>
    </HeaderStyled>
);
