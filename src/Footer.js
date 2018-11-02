import React from 'react';
import styled from 'styled-components';

const Footer = (props) => {
    const StyledFooter = styled.div`
        color: purple;
        font-size: 36px;
    `

    return (
        <div>
            <StyledFooter>
                Footer
            </StyledFooter>
        </div>
    );
}

export default Footer;
