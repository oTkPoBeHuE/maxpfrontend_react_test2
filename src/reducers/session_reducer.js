import { LOG_IN, LOG_OUT, LOG_IN_FAILURE } from 'action_types';

const initialState = {
	user: null,
	errorMsg: ''
};

export default (state = initialState, action) => {
	console.log('action.type', action.type);
	switch (action.type) {
		case LOG_IN:
			return {
				...state,
				user: {
					email: action.payload.email,
					id: action.payload.id
				},
				errorMsg: ''
			};
		case LOG_OUT:
			return {
				...state,
				user: null,
				errorMsg: ''
			};
		case LOG_IN_FAILURE:
			return {
				...state,
				errorMsg: action.payload.errorMsg
			};
		default:
			return state;
	}
};
