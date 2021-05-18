import React from 'react';
import {Route, Switch, Redirect, BrowserRouter} from 'react-router-dom';
import Home from './pages/Home'
import Pie from './pages/Pie'
import AreaChart from './pages/AreaChart'
import WordClouds from './pages/WordClouds'

const pages = [
    {
        path: '/',
        exact: true,
        component: () => <Home />,
    },
    {
        path: '/pie',
        exact: true,
        component: () => <Pie />,
    },
    {
        path: '/area-chart',
        exact: true,
        component: () => <AreaChart />,
    },
    {
        path: '/word-cloud',
        exact: true,
        component: () => <WordClouds />,
    },
    { path: '/404', exact: true, component: () => <p>Page Not Found</p> },
];

const Routes = () => (
    <BrowserRouter>
        <Route 
            render={({ location }) => (
                <section className="route-section">
                  <Switch location={location}>
                    {pages.map(({ path, exact, component: Component }) => (
                      <Route exact={exact} path={path} component={Component} key={path} />
                    ))}
                    <Redirect
                      to={{
                        pathname: '/404',
                        state: { from: location },
                      }}
                    />
                  </Switch>
                </section>
              )}
        />
    </BrowserRouter>
);

export default Routes;