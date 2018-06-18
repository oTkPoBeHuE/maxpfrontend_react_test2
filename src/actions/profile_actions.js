import axios from 'axios';
import { checkCredentials } from 'utils/utils.js';
import errorMessages from 'utils/error_messages.js';
import { GET_PROFILE_SUCCESS, GET_PROFILE_FAILURE } from '../action_types.js';
import { USER_INFO } from '../utils/backend_urls.js';

export function getUserProfile(id) {
	console.log(USER_INFO + id, id);
	return dispatch =>
		axios
			.get(USER_INFO + id)
			.then(response => {
				console.log('response', response);
				console.log('response.data', response.data);

				if (response.data.status === 'err') throw { message: response.data.message };
				return getProfileSuccess({ id, data: response.data.data });
			})
			.catch(error => getProfileFailure(errorMessages(error.message)))
			.then(data => dispatch(data));

	// const data = checkCredentials({ username, password }) ? loginSuccess(username) : loginFaailure();
	// const data = loginSuccess(email);
	// return dispatch => dispatch(data);
}

function getProfileSuccess({ id, data }) {
	console.log('getProfileSuccess', { id, data });
	return {
		type: GET_PROFILE_SUCCESS,
		payload: {
			data: data,
			id: id
		}
	};
}

//'Имя пользователя или пароль введены не верно'
function getProfileFailure(errorMsg = 'Ошибка входа в аккаунт') {
	console.log('loginFaailure');
	return {
		type: GET_PROFILE_FAILURE,
		payload: {
			errorMsg: errorMsg
		},
		error: true
	};
}
