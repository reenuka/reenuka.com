import React from 'react';
import styled from 'styled-components'

const Header = (props) => {
    const StyledHeader = styled.div`
    .header {
        width: 70vw;
    }
    `

    return (
        <div>
            <StyledHeader>
                <img className="header" src={require('./header.jpg')} alt="test"/>
            </StyledHeader>
        </div>
    );
}

export default Header;
