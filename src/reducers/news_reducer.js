import update from 'immutability-helper';
import { ADD_NEWS, LOAD_NEWS_FAILURE } from 'action_types';

const initialState = {
	news: [],
	errorMsg: ''
};

function getCommand({ payload, type }) {
	switch (type) {
		case ADD_NEWS:
			return {
				news: { $set: payload.news },
				errorMsg: { $set: '' }
			};
		case LOAD_NEWS_FAILURE:
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
