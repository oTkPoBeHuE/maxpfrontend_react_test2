import { checkCredentials } from 'utils/utils.js';
import { LOG_IN, LOG_IN_FAILURE, LOG_OUT } from '../action_types.js';

export function logIn({ username, password }) {
	const data = checkCredentials({ username, password }) ? loginSuccess(username) : loginFaailure();
	return dispatch => dispatch(data);
}

export function logOut() {
	return {
		type: LOG_OUT
	};
}

function loginSuccess(username) {
	return {
		type: LOG_IN,
		payload: {
			name: username
		}
	};
}

function loginFaailure() {
	return {
		type: LOG_IN_FAILURE,
		payload: {
			errorMsg: 'Имя пользователя или пароль введены не верно'
		},
		error: true
	};
}
