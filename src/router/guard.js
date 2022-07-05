import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";

import routes from './routes';

const isDev = process.env.NODE_ENV === 'development';

const serverDir = isDev ? '' : '/react-template';

export default function Guarder() {
    // 做路由守卫 使用switch,匹配其中一个,不再会继续往下匹配
    {/* 嵌套路由不用写component 写render 继续渲染下一级路由 */}
    {/* 嵌套路由 不能加exact 否则不能匹配到`/admin` 只能精准匹配到`/` */}
    return <Switch>
        <Route
            exact
            path="/"
            render={() => <Redirect exact to={`${serverDir}/home`} />}
        />
        {
            routes.map((item) => (
                <Route
                    key={item.path}
                    path={`${serverDir}${item.path}`}
                    component={item.component}
                />
            ))
        }
        <Route render={() => <Redirect exact to={`${serverDir}/404`} />} />
    </Switch>
}
