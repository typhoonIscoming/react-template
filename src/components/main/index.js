import React from "react";
import styled from 'styled-components';

import './index.scss';

const MainContainer = styled.div`
    display: block;
    margin-top: var(--header-height);
    min-height: 100vh;
`

export default function Main(props) {
    return <MainContainer className="MainContainer">{ props.children }</MainContainer>
}
