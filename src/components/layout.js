import React, { useContext } from 'react';
import routerContext from '@/context/routerContext';

export default function Layout(props) {
    const router = useContext(routerContext);
    console.log('layout router', router);
    
    return (
        <div className={`Layout ${props.className}`} style={{ position: 'relative' }}>
            <header className='NavBar' data-r-1343>
                header
            </header>
            { props.children }
        </div>
    )
}
