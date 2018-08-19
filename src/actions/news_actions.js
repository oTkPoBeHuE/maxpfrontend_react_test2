import axios from 'axios';
import errorMessages from 'utils/error_messages.js';
import { ADD_NEWS, LOAD_NEWS_FAILURE } from '../action_types.js';
import { NEWS } from '../utils/backend_urls.js';

export function loadNews() {
	return dispatch =>
		axios
			.get(NEWS)
			.then(response => {
				if (response.data.status === 'err') throw new Error(response.data.message);
				return addNews(response.data.data);
			})
			.catch(error => loadNewsFailure(errorMessages(error.message)))
			.then(data => dispatch(data));
}

function addNews(news) {
	return {
		type: ADD_NEWS,
		payload: {
			news: news
		}
	};
}

function loadNewsFailure(errorMsg = 'Ошибка загрузки новостей') {
	return {
		type: LOAD_NEWS_FAILURE,
		payload: {
			errorMsg: errorMsg
		},
		error: true
	};
}
