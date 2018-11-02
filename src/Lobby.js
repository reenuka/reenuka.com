import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Intro from './Intro';
import Summary from './Summary';
import Blog from './Blog';
import Portfolio from './Portfolio';

const Lobby = (props) => {
    return (
        <div>
            Lobby
            <Header />
            <Intro />
            <Summary />
            <Blog />
            <Portfolio />
            <Footer />
        </div>
    );
}

export default Lobby;
