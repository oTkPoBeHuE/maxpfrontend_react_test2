import axios from 'axios';
import errorMessages from 'utils/error_messages.js';
import { ADD_NEWS, LOAD_NEWS_FAILURE } from '../action_types.js';
import { NEWS } from '../utils/backend_urls.js';

export function loadNews() {
	return dispatch =>
		axios
			.get(NEWS)
			.then(response => {
				console.log('response', response);
				console.log('response.data', response.data);

				if (response.data.status === 'err') throw { message: response.data.message };
				return addNews(response.data.data);
			})
			.catch(error => loadNewsFailure(errorMessages(error.message)))
			.then(data => dispatch(data));
}

function addNews(news) {
	console.log('news', news);
	return {
		type: ADD_NEWS,
		payload: {
			news: news
		}
	};
}

//'Имя пользователя или пароль введены не верно'
function loadNewsFailure(errorMsg = 'Ошибка загрузки новостей') {
	console.log('loginFaailure');
	return {
		type: LOAD_NEWS_FAILURE,
		payload: {
			errorMsg: errorMsg
		},
		error: true
	};
}
