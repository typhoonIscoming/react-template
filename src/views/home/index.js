import React, { useTransition, useState } from 'react';
import Layout from '@/components/layout';
import RouterContext from '@/context/routerContext';

import './home.scss';

export default function Home(props) {
    return (
        <RouterContext.Provider value={props}>
            <Layout className="LayoutHome">
                <div className='Home'>
                Home
                </div>
            </Layout>
        </RouterContext.Provider>
    )
}
