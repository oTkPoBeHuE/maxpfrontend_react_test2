import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Login from 'components/pages/login_page/login_page';
import Navigation from 'components/navigation/navigation.jsx';
import RoutesComponent from 'components/routes_component/routes_component';

import { withRouter } from 'react-router-dom';

import routes from 'routes/routes.js';

class App extends PureComponent {
	render() {
		return (
			<div className={'container bg-light'}>
				<header className="mxpf1-navigation">
					<Navigation
						routes={routes
							.filter(route => route.isInNavBar)
							.filter(route => !(route.path === '/login' && this.props.user))
							.filter(route => !(route.path === '/logout' && !this.props.user))}
					/>
				</header>
				<div className={'d-flex justify-content-center  mt-5'}>
					<RoutesComponent routes={routes} isAutorized={!!this.props.user} loginPage={Login} />
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		user: state.session.user,
		error: state.session.errorMsg
	};
};

export default withRouter(connect(mapStateToProps, null)(App));
