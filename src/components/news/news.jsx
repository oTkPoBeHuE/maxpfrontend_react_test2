import React from 'react';

export default ({ children, title = 'Good news!' }) => (
	<div className="alert alert-primary" role="alert">
		<h4 className="alert-heading"> {title}</h4>
		<hr />
		<p className="mb-0">{children}</p>
	</div>
);
