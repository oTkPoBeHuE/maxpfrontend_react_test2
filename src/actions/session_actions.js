import axios from 'axios';
import { checkCredentials } from 'utils/utils.js';
import errorMessages from 'utils/error_messages.js';
import { LOG_IN, LOG_IN_FAILURE, LOG_OUT } from '../action_types.js';
import { LOGIN } from '../utils/backend_urls.js';

export function logIn({ email, password }) {
	return dispatch =>
		axios
			.post(LOGIN, {
				email,
				password,
				'content-type': 'application/json'
			})
			.then(response => {
				if (response.data.status === 'err') throw new Error(response.data.message);
				if (!checkCredentials({ login: email, password: password })) throw new Error('wrong_email_or_password');
				return loginSuccess({ email, id: response.data.data.id });
			})
			.catch(error => loginFailure(errorMessages(error.message)))
			.then(data => dispatch(data));
	// .then(data => {
	// 	const data = checkCredentials({ username: email, password: password }) ? loginSuccess(email) : loginFaailure();
	// 	const data = loginSuccess(email);
	// 	return dispatch => dispatch(data);
	// });
}

export function logOut() {
	return {
		type: LOG_OUT
	};
}

function loginSuccess({ email, id }) {
	return {
		type: LOG_IN,
		payload: {
			email: email,
			id: id
		}
	};
}

function loginFailure(errorMsg = 'Ошибка входа в аккаунт') {
	return {
		type: LOG_IN_FAILURE,
		payload: {
			errorMsg: errorMsg
		},
		error: true
	};
}
