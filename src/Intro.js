import React from 'react';
import styled from 'styled-components';

const Intro = (props) => {
    const StyledIntro = styled.div`
        color: green;
        font-size: 36px;
        overflow: auto;
    `

    return (
        <div>
            <StyledIntro>
                Intro
            </StyledIntro>
        </div>
    );
}

export default Intro;
