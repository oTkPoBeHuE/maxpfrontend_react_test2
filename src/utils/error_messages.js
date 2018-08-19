const messagesObject = {
	'Request failed with status code 404': '404. Cервер не может найти данные согласно запросу.',
	wrong_email_or_password: 'Неправильный адрес электронной почты или пароль.'
};

const messages = new Map(Object.entries(messagesObject));

export default error => messages.get(error) || error || 'Неизвестная ошибка';
