import React from 'react';
import styled from 'styled-components';

const Portfolio = (props) => {
    const StyledPortfolio = styled.div`
        color: indigo;
        font-size: 36px;
    `

    return (
        <div>
            <StyledPortfolio>
                Portfolio
            </StyledPortfolio>
        </div>
    );
}

export default Portfolio;
