import React, { useContext } from 'react';
import routerContext from '@/context/routerContext';

import Sider from '@/components/sider';
import Main from '@/components/main';

export default function Layout(props) {
    // const router = useContext(routerContext);
    // console.log('layout router', router);
    
    return (
        <div className={`Layout ${props.className || ''}`} style={{ position: 'relative' }}>
            <header className='NavBar'>
                header
            </header>
            <div className='LayoutContainer'>
                <Sider />
                <Main>{ props.children }</Main>
            </div>
            
        </div>
    )
}
