import React from 'react';
import PropTypes from 'prop-types';

const News = ({ children, title }) => (
	<div className="alert alert-primary" role="alert">
		<h4 className="alert-heading"> {title}</h4>
		<hr />
		<p className="mb-0">{children}</p>
	</div>
);

News.propTypes = {
	children: PropTypes.node.isRequired,
	title: PropTypes.string.isRequired
};
News.defaultProps = {
	title: 'Good news!'
};

export default News;
