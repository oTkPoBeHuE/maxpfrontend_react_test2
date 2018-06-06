const messagesObject = {
	'Request failed with status code 404': '404. Cервер не может найти данные согласно запросу.',
	wrong_email_or_password: 'Имя пользователя или пароль введены не верно'
};

const messages = new Map(Object.entries(messagesObject));

export default error => messages.get(error) || error || 'Неизвестная ошибка';

//313@wqeq
