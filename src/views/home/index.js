import React, { useTransition, useState } from 'react';
import Layout from '@/components/layout';
import RouterContext from '@/context/routerContext';

import { Button, Checkbox } from 'antd';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

import './home.scss';

export default function Home(props) {
    const [isAccess, setAccess] = useState(false);
    const [checked, setChecked] = useState(true);
    const onChange = (e) => {
        console.log('checked = ', e.target.checked);
        setChecked(!checked);
    };
    return (
        <RouterContext.Provider value={props}>
            <Layout className="LayoutHome">
                <div className='Home'>
                    <Button onClick={() => setAccess((val) => !val)}>
                        {isAccess ? "on": "off"}
                    </Button>
                    <Checkbox checked={checked} onChange={onChange}>Checkbox</Checkbox>
                    <SwitchTransition mode="out-in">
                        <CSSTransition
                            classNames="btn"
                            timeout={500}
                            key={isAccess ? "on" : "off"}
                        >
                                <span>
                                { isAccess ? "on" : "off" }
                                </span>
                        </CSSTransition>
                    </SwitchTransition>
                </div>
            </Layout>
        </RouterContext.Provider>
    )
}
