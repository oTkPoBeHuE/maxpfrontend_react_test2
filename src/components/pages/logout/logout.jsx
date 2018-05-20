import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { logOut } from 'actions/session_actions';
import { Redirect } from 'react-router-dom';

class Logout extends PureComponent {
	componentWillMount() {
		this.props.logOut();
	}
	render() {
		return <Redirect to="/" />;
	}
}

const mapDispatchToProps = dispatch => ({
	logOut: bindActionCreators(logOut, dispatch)
});

export default connect(null, mapDispatchToProps)(Logout);
