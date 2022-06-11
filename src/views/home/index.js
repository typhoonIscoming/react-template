import React from 'react';
import Layout from '@/components/layout';
import RouterContext from '@/context/routerContext';

import Sider from '@/components/sider';
import Main from '@/components/main';

import './home.scss';

export default function Home(props) {
    return (
        <RouterContext.Provider value={props}>
            <Layout className="LayoutHome">
                <div className='Home'>
                    <Sider />
                    <Main>
                        <div className='container'>
                            main
                        </div>
                    </Main>
                </div>
            </Layout>
        </RouterContext.Provider>
    )
}
