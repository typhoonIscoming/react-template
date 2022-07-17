import React from 'react';
import Layout from '@/components/layout';
import RouterContext from '@/context/routerContext';
import { Button } from 'antd';

import curry from '@/utils/curry';

const sum = (a, b, c) => a + b + c;

const fn = curry(sum);
const result = fn(1, 2, 3);
console.log('result', result)

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
