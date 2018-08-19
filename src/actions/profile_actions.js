import axios from 'axios';
import errorMessages from 'utils/error_messages.js';
import { GET_PROFILE_SUCCESS, GET_PROFILE_FAILURE } from '../action_types.js';
import { USER_INFO } from '../utils/backend_urls.js';

export function getUserProfile(id) {
	return dispatch =>
		axios
			.get(USER_INFO + id)
			.then(response => {
				if (response.data.status === 'err') throw new Error(response.data.message);
				return getProfileSuccess({ id, data: response.data.data });
			})
			.catch(error => getProfileFailure(errorMessages(error.message)))
			.then(data => dispatch(data));
}

function getProfileSuccess({ id, data }) {
	return {
		type: GET_PROFILE_SUCCESS,
		payload: {
			data: data,
			id: id
		}
	};
}

function getProfileFailure(errorMsg = 'Ошибка входа в аккаунт') {
	return {
		type: GET_PROFILE_FAILURE,
		payload: {
			errorMsg: errorMsg
		},
		error: true
	};
}
