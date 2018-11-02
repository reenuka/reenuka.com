import React from 'react';
import styled from 'styled-components';

const Footer = (props) => {
    const StyledFooter = styled.div` 
        color: purple;
        font-size: 36px;
        text-align: center;

        display: flex;
        flex-direction: column;
        justify-content: space-around;

        width: 1000px;
        height: 200px;
        border: 5px solid #8AC007;

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
        
        .copyright {
            color: lavender;
            font-size: 10px;
        }
    `

    return (
        <div>
            <StyledFooter className="test">
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

                <div className="copyright">
                    COPYRIGHT © 2018 - REENUKA SARIKA RĀMPHAL
                </div>
            </StyledFooter>
        </div>
    );
}

export default Footer;
