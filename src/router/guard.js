import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";

import routes from './routes';

export default function Guarder() {
    // 做路由守卫
    return <Switch>
        <Route
            exact
            path="/"
            render={() => <Redirect exact to="/home" />}
        />
        {
            routes.map((item) => (
                <Route
                    key={item.path}
                    path={item.path}
                    component={item.component}
                />
            ))
        }
        <Route render={() => <Redirect exact to="/404" />} />
    </Switch>
}
