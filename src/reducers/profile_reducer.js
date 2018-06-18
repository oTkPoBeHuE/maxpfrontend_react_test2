import update from 'immutability-helper';
import { GET_PROFILE_SUCCESS, GET_PROFILE_FAILURE } from '../action_types.js';

const initialState = {
	id: null,
	data: null,
	errorMsg: ''
};

export default (state = initialState, action) => {
	console.log('action.type', action.type);
	console.log('action.payload', action.payload);
	switch (action.type) {
		case GET_PROFILE_SUCCESS:
			return update(state, {
				$set: { id: action.payload.id, data: action.payload.data, errorMsg: '' }
			});
		case GET_PROFILE_FAILURE:
			return update(state, {
				$set: {
					...initialState,
					errorMsg: action.payload.errorMsg
				}
			});
		default:
			return state;
	}
};
