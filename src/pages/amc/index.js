import React, {Component,} from 'react';
import {Switch, Route} from 'react-router-dom';
import {Spin} from 'antd';
import Loadable from 'react-loadable';

class AmcRoute extends Component {
    render() {
        const Loading = () => {
            return (
                <div className="loading">
                    <Spin size="large"></Spin>
                </div>
            );
        };

        return (
            <Switch>
                <Route
                    exact
                    path="/cbd/amc/process"
                    component={Loadable({
                        loader: () => import(
                            './process/Index/index'),
                        loading: Loading
                    })}
                />
                <Route
                    exact
                    path="/cbd/amc/alarm/detail/:id"
                    component={Loadable({
                        loader: () => import(
                            './process/Detail/index'),
                        loading: Loading
                    })}
                />
                <Route
                    exact
                    path="/cbd/amc/alarm/workOrder/"
                    component={Loadable({
                        loader: () => import(
                            './process/Create/index'),
                        loading: Loading
                    })}
                />
            </Switch>
        );
    }
}

export default AmcRoute;