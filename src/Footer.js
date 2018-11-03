import React from 'react';
import styled from 'styled-components';

import Navigator from './Navigator';

const Footer = (props) => {
    const StyledFooter = styled.div` 
        color: purple;
        font-size: 36px;
        text-align: center;

        display: flex;
        flex-direction: column;
        justify-content: space-around;

        margin: auto;
        width: 70vw;
        height: 200px;
        border: 1px solid white;

        .row {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }

        .left {
            color: pink;
            text-align: left;
        }
        
        .right {
            color: yellow;
            text-align: right;
        }
    `

    return (
        <div>
            <StyledFooter className="footer-container">
                <div>
                    Footer Navigation
                </div>

                <div className="row">
                    <div className="left">
                        Contact
                    </div>
                    <div className="right">
                        Something?
                    </div>
                </div>
            </StyledFooter>

        </div>
    );
}

export default Footer;
