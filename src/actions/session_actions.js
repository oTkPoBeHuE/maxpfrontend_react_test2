import axios from 'axios';
import { checkCredentials } from 'utils/utils.js';
import errorMessages from 'utils/error_messages.js';
import { LOG_IN, LOG_IN_FAILURE, LOG_OUT } from '../action_types.js';
import { LOGIN } from '../utils/backend_urls.js';

export function logIn({ email, password }) {
	email = 'max@test.com';
	password = '12345';

	return dispatch =>
		axios
			.post(LOGIN, {
				email,
				password,
				'content-type': 'application/json'
			})
			.then(response => {
				console.log('response', response);
				console.log('response.data', response.data);

				if (response.data.status === 'err') throw { message: response.data.message };
				return loginSuccess({ email, id: response.data.data.id });
			})
			.catch(error => loginFaailure(errorMessages(error.message)))
			.then(data => dispatch(data));

	// const data = checkCredentials({ username, password }) ? loginSuccess(username) : loginFaailure();
	// const data = loginSuccess(email);
	// return dispatch => dispatch(data);
}

export function logOut() {
	return {
		type: LOG_OUT
	};
}

function loginSuccess({ email, id }) {
	console.log('loginSuccess', { email, id });
	return {
		type: LOG_IN,
		payload: {
			email: email,
			id: id
		}
	};
}

//'Имя пользователя или пароль введены не верно'
function loginFaailure(errorMsg = 'Ошибка входа в аккаунт') {
	console.log('loginFaailure');
	return {
		type: LOG_IN_FAILURE,
		payload: {
			errorMsg: errorMsg
		},
		error: true
	};
}
