import React from 'react';
import Layout from '@/components/layout';
import RouterContext from '@/context/routerContext';
import { Button } from 'antd';

export default function Main(props) {
    const goToHome = () => {
        props.history.push('/home')
    }
    return <RouterContext.Provider value={props}>
        <Layout>
            <div className='Main'>
                <div>Main</div>
                <Button onClick={() => goToHome()}>Home Page</Button>
            </div>
        </Layout>
    </RouterContext.Provider>
}
