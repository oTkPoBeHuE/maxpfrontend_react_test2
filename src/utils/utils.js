export function checkCredentials({ username = '', password = '' }) {
	return username.toLowerCase() === 'admin' && password === '12345';
}

export function isStatusError({ status }) {
	return status === 'err';
}

export function isStatusOk({ status }) {
	return status === 'ok';
}

export function getErrorMessage({ message }) {
	return message;
}

export function translationErorMesage(message) {
	const messages = {
		wrong_email_or_password: 'Имя пользователя или пароль введены не верно',
		user_not_found: 'Пользователь не найден'
	};
	return messages[message] || 'Неизвестная ошибка';
}

export function getData({ data }) {
	return data;
}
