export function checkCredentials({ login = '', password = '' }) {
	return login.toLowerCase() === 'max@test.com' && password === '12345';
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

export function getData({ data }) {
	return data;
}
