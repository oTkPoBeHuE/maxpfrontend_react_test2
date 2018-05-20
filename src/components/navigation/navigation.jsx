import React from 'react';
import { NavLink } from 'react-router-dom';

const navLinkProps = {
	className: 'nav-link',
	exact: true,
	activeStyle: {
		color: 'red'
	}
};

export default ({ routes }) => {
	const renderNavigationLink = ({ path, name }, key) => (
		<NavLink {...navLinkProps} to={path} key={key}>
			{name}
		</NavLink>
	);
	return <nav className="nav">{routes.map(renderNavigationLink)}</nav>;
};
