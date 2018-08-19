import update from 'immutability-helper';
import { LOG_IN, LOG_OUT, LOG_IN_FAILURE } from 'action_types';

const initialState = {
	user: null,
	errorMsg: ''
};

function getCommand({ payload, type }) {
	switch (type) {
		case LOG_IN:
			return {
				user: {
					$set: { email: payload.email, id: payload.id }
				},
				errorMsg: { $set: '' }
			};
		case LOG_OUT:
			return {
				user: { $set: null },
				errorMsg: { $set: '' }
			};
		case LOG_IN_FAILURE:
			return {
				errorMsg: { $set: payload.errorMsg }
			};
		default:
			return null;
	}
}

export default (state = initialState, action) => {
	const command = getCommand(action);
	return command ? update(state, command) : state;
};
