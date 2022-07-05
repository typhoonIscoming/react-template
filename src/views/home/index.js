import React, { useTransition, useState } from "react";
import Layout from "@/components/layout";
import RouterContext from "@/context/routerContext";

import { Button, Checkbox } from "antd";
import {
    CSSTransition,
    SwitchTransition,
    TransitionGroup,
} from "react-transition-group";

import homeStyle from "./home.scss";

export default function Home(props) {
    const [isAccess, setAccess] = useState(false);
    const [checked, setChecked] = useState(true);
    const arr = [{ name: "tom" }, { name: "Bob" }, { name: "Alice" }];
    const [list, setList] = useState(arr);
    const onChange = (e) => {
        console.log("checked = ", e.target.checked);
        setChecked(!checked);
    };
    const onSetList = () => {
        const random = Math.floor(Math.random() * 100);
        setList((list) => {
            return list.concat([{ name: `bob_${random}` }]);
        });
    };
    const goToMain = () => {
        props.history.push('/main')
    }
    return (
        <RouterContext.Provider value={props}>
            <Layout className="LayoutHome">
                <div className={homeStyle.Home}>
                    <Button onClick={() => setAccess((val) => !val)}>
                        {isAccess ? "on" : "off"}
                    </Button>
                    <Checkbox checked={checked} onChange={onChange}>
                        Checkbox
                    </Checkbox>
                    <SwitchTransition mode="out-in">
                        <CSSTransition
                            classNames="btn"
                            timeout={500}
                            key={isAccess ? "on" : "off"}
                        >
                            <span>{isAccess ? "on" : "off"}</span>
                        </CSSTransition>
                    </SwitchTransition>
                    <div>
                        <TransitionGroup>
                            {list.map((item, index) => {
                                return (
                                    <CSSTransition
                                        classNames="friend"
                                        timeout={300}
                                        key={index}
                                    >
                                        <div>{item.name}</div>
                                    </CSSTransition>
                                );
                            })}
                        </TransitionGroup>
                        <Button onClick={onSetList}>增加</Button>
                        <Button onClick={() => goToMain()}>Main</Button>
                        <div className={homeStyle.bgBox}>这里有背景图片</div>
                    </div>
                </div>
            </Layout>
        </RouterContext.Provider>
    );
}
