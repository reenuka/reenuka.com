import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Intro from './Intro';
import Summary from './Summary';

class Lobby extends Component {
    render() {
        return (
            <div>
                Lobby
                <Header />
                <Intro />
                <Summary />
                <Footer />
            </div>
        );
    }
}

export default Lobby;
