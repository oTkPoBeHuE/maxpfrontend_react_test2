import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const navLinkProps = {
	className: 'nav-link',
	exact: true,
	activeStyle: {
		color: 'red'
	}
};

const renderNavigationLink = ({ path, name }, key) => (
	<NavLink {...navLinkProps} to={path} key={key}>
		{name}
	</NavLink>
);

const Navigation = ({ routes }) => <nav className="nav">{routes.map(renderNavigationLink)}</nav>;

Navigation.propTypes = {
	routes: PropTypes.array.isRequired
};
Navigation.defaultProps = {
	routes: []
};

export default Navigation;
