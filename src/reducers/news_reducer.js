import update from 'immutability-helper';
import { ADD_NEWS, LOAD_NEWS_FAILURE } from 'action_types';

const initialState = {
	news: [],
	errorMsg: ''
};

// TODO: Переписать чтобы возвращался не update а объект {$set}
export default (state = initialState, action) => {
	console.log('action.type', action.type);
	switch (action.type) {
		case ADD_NEWS:
			return update(state, {
				news: { $set: action.payload.news },
				errorMsg: { $set: '' }
			});
		case LOAD_NEWS_FAILURE:
			return update(state, {
				errorMsg: { $set: action.payload.errorMsg }
			});
		default:
			return state;
	}
};
