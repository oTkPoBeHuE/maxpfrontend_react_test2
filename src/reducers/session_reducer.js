import update from 'immutability-helper';
import { LOG_IN, LOG_OUT, LOG_IN_FAILURE } from 'action_types';

const initialState = {
	user: null,
	errorMsg: ''
};

export default (state = initialState, action) => {
	console.log('action.type', action.type);
	switch (action.type) {
		case LOG_IN:
			return update(state, {
				user: {
					email: { $set: action.payload.email },
					id: { $set: action.payload.id }
				},
				errorMsg: { $set: '' }
			});
		case LOG_OUT:
			update(state, {
				user: { $set: null },
				errorMsg: { $set: '' }
			});
		case LOG_IN_FAILURE:
			return update(state, {
				errorMsg: { $set: action.payload.errorMsg }
			});
		default:
			return state;
	}
};
