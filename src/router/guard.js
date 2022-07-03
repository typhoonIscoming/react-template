import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";

import routes from './routes';

const isDev = process.env.NODE_ENV === 'development';

const serverDir = isDev ? '' : '/react-template';

export default function Guarder() {
    // 做路由守卫
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
