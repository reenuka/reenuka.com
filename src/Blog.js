import React from 'react';
import styled from 'styled-components';

const Blog = (props) => {
    const StyledBlog = styled.div`
        color: orange;
        font-size: 36px;
    `

    return (
        <div>
            <StyledBlog>
                Blog
            </StyledBlog>
        </div>
    );
}

export default Blog;
