import update from 'immutability-helper';
import { GET_PROFILE_SUCCESS, GET_PROFILE_FAILURE } from '../action_types.js';

const initialState = {
	id: null,
	data: null,
	errorMsg: ''
};

function getCommand({ payload, type }) {
	switch (type) {
		case GET_PROFILE_SUCCESS:
			return {
				$set: { id: payload.id, data: payload.data, errorMsg: '' }
			};
		case GET_PROFILE_FAILURE:
			return {
				$set: {
					...initialState,
					errorMsg: payload.errorMsg
				}
			};
		default:
			return null;
	}
}

export default (state = initialState, action) => {
	const command = getCommand(action);
	return command ? update(state, command) : state;
};
