import React from 'react';
import styled from 'styled-components';

import Header from './Header';
import Navigator from './Navigator';
import Intro from './Intro';
import Summary from './Summary';
import Blog from './Blog';
import Portfolio from './Portfolio';
import Footer from './Footer';

const Lobby = (props) => {
    
    const StyledLobby = styled.div`
        color: red;
        font-size: 36px;

        margin: auto;
        width: 70vw;
    `

    return (
        <StyledLobby>
            <Header />
            <Navigator />
            <Intro />
            <Summary />
            <Blog />
            <Portfolio />
            <Footer />
        </StyledLobby>
    );
}

export default Lobby;
