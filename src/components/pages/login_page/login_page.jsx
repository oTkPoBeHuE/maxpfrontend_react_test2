import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { logIn } from 'actions/session_actions';
import { Redirect } from 'react-router-dom';

class Login extends PureComponent {
	static propTypes = {
		user: PropTypes.object,
		logIn: PropTypes.func.isRequired,
		error: PropTypes.string
	};

	constructor(props) {
		super(props);
		this.state = {
			email: 'max@test.com',
			password: '12345'
		};
	}

	handleChange = ({ target: { name, value } }) => {
		this.setState({
			[name]: value
		});
	};

	handleSubmit = event => {
		if (!this.isDisableSubmitButton) {
			const { email, password } = this.state;
			this.props.logIn({ email, password });
		}
		event.preventDefault();
	};

	get isDisableSubmitButton() {
		return !this.state.email || !this.state.password;
	}

	render() {
		if (this.props.user) {
			return <Redirect to="/profile" />;
		}

		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<input
						autoComplete="email"
						placeholder="Email"
						type="email"
						name="email"
						value={this.state.email}
						onChange={this.handleChange}
					/>
					<input
						autoComplete="password"
						placeholder="Пароль"
						type="password"
						name="password"
						value={this.state.password}
						onChange={this.handleChange}
					/>
					<input name="submit" type="submit" value="Войти" disabled={this.isDisableSubmitButton} />
				</form>{' '}
				{this.props.error && (
					<div className="alert alert-danger mt-2" role="alert">
						{this.props.error}
					</div>
				)}
			</div>
		);
	}
}

const mapStateToProps = state => ({
	user: state.session.user,
	error: state.session.errorMsg
});

const mapDispatchToProps = dispatch => ({
	logIn: bindActionCreators(logIn, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
