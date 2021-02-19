import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from '../components/home/Home';
import CategoryInfo from '../components/categoryInfo/CategoryInfo';
import ContentPreview from '../components/contentPrevew/ContentPreview';
import SearchPreview from '../components/searchPrevew/SearchPreview';

const routes = [
    {
        name: 'Home',
        key: 'home',
        path: '/',
        exact: true,
        component: Home
    },
    {
        name: 'Category',
        key: 'category',
        path: '/category/:name',
        exact: true,
        component: CategoryInfo
    },
    {
        name: 'Preview',
        key: 'preview',
        path: '/preview/:id',
        exact: true,
        component: ContentPreview
    },
    {
        name: 'Search',
        key: 'search',
        path: '/search',
        exact: true,
        component: SearchPreview
    },
]

const Router = () => (
    <Switch>
        {routes.map(route => <Route {...route}/>)}
        <Redirect to="/"/>
    </Switch>
)

export default Router;