import React from "react";
import styled from 'styled-components';

import './index.scss';

const MainContainer = styled.div`
    display: block;
    margin-top: var(--header-height);
    min-height: 100vh;
    .MainContent{
        margin: 0 auto;
        padding: 0 1.5rem 4rem;
        max-width: 48rem;
    }
`

export default function Main(props) {
    return <MainContainer className="MainContainer">
        <div className="MainContent">
            { props.children }
        </div>
    </MainContainer>
}
