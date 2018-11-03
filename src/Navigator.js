import React from 'react';
import styled from 'styled-components';

const Navigator = (props) => {
    const StyledNavigator = styled.div`
        color: grey;
        font-size: 16px;
        text-align: right;
        word-spacing: 15px;

        width: 70vw;
    `

    return (
        <div>
            <StyledNavigator>
                Home 
                About Me 
                Blog 
                Portfolio
            </StyledNavigator>
        </div>
    );
}

export default Navigator;
