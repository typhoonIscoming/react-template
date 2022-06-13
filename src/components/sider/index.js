import React from "react";
import styled from 'styled-components';

const SiderContainer = styled.div`
    position: fixed;
    top: var(--header-height);
    bottom: 0;
    left: 0;
    z-index: 6;
    border-right: 1px solid rgba(60, 60, 67, 0.12);
    width: 16.4rem;
    // background-color: green;
    overflow-y: auto;
    transform: translate(-100%);
    transition: transform .25s ease;
    color: red;
    padding: 1.5rem;
`

export default function Sider() {
    return <SiderContainer className="Sider">
        <div className="SiderContent">
            SiderContent
        </div>
    </SiderContainer>
}



