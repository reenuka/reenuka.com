import React from 'react';
import styled from 'styled-components';

const Summary = (props) => {
    const StyledSummary = styled.div`
        color: blue;
        font-size: 36px;
    `

    return (
        <div>
            <StyledSummary>
                Summary
            </StyledSummary>
        </div>
    );
}

export default Summary;
