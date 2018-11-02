import React from 'react';
import styled from 'styled-components'

const Header = (props) => {
    const StyledHeader = styled.div`
        color: gold;
        font-size: 36px;
    `

    return (
        <div>
            <StyledHeader>
                Header
            </StyledHeader>
        </div>
    );
}

export default Header;
