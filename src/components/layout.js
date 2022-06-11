import React, { useContext } from 'react';
import routerContext from '@/context/routerContext';

export default function Layout(props) {
    const router = useContext(routerContext);
    console.log('layout router', router);
    
    return (
        <div className={`Layout ${props.className}`}>
            <header className='NavBar' data-r-1343>
                header
            </header>
            <section className='Main' style={{ position: 'relative' }}>
                {
                    props.children
                }
            </section>
        </div>
    )
}
