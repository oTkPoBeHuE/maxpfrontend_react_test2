import React from 'react';
import { Switch, Route } from 'react-router-dom';

export default ({ routes, isAutorized, loginPage }) => {
	const authorizedComponent = component => (isAutorized ? component : loginPage);

	const renderRoute = ({ isExact, path, isPrivate, component }, key) => (
		<Route key={key} exact={isExact} path={path} component={isPrivate ? authorizedComponent(component) : component} />
	);

	return <Switch>{routes.map(renderRoute)}</Switch>;
};
