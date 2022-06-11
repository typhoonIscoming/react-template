import React from 'react';
import Layout from '@/components/layout';
import RouterContext from '@/context/routerContext';


export default function Main(props) {
    return <RouterContext.Provider value={props}>
        <Layout>
            <div className='Main'>
                Main
            </div>
        </Layout>
    </RouterContext.Provider>
}
