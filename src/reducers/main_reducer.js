import { combineReducers } from 'redux';
import session from './session_reducer';
import news from './news_reducer';
import profile from './profile_reducer';

export default combineReducers({
	session,
	news,
	profile
});
