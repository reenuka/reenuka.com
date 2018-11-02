import React from 'react';
import styled from 'styled-components';

import Header from './Header';
import Footer from './Footer';
import Intro from './Intro';
import Summary from './Summary';
import Blog from './Blog';
import Portfolio from './Portfolio';

const Lobby = (props) => {
    
    const StyledLobby = styled.div`
        color: red;
        font-size: 36px;
    `

    return (
        <StyledLobby>
            Lobby
            <Header />
            <Intro />
            <Summary />
            <Blog />
            <Portfolio />
            <Footer />
        </StyledLobby>
    );
}

export default Lobby;
