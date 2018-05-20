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
			username: '',
			password: ''
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange({ target: { name, value } }) {
		this.setState({
			[name]: value
		});
	}

	handleSubmit(event) {
		if (!this.isDisableSubmitButton) {
			const { username, password } = this.state;
			this.props.logIn({ username, password });
		}
		event.preventDefault();
	}

	get isDisableSubmitButton() {
		return !this.state.username || !this.state.password;
	}

	render() {
		if (this.props.user) {
			return <Redirect to="/profile" />;
		}
		// autoComplete="username"

		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<input
						autoComplete="username"
						placeholder="Имя"
						type="text"
						name="username"
						value={this.state.username}
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
				{this.props.error ? (
					<div className="alert alert-danger mt-2" role="alert">
						{this.props.error}
					</div>
				) : null}
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

const mapDispatchToProps = dispatch => ({
	logIn: bindActionCreators(logIn, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
