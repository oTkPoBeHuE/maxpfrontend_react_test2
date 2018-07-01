import React from 'react';

const specificationURL = 'https://vk.com/@maxpfrontend-testovoe-zadanie-2';
const communityURL = 'https://vk.com/maxpfrontend';
const vkURL = 'https://vk.com/otkpobehue';

export default () => (
	<blockquote className="blockquote text-center">
		<p>
			Данный проект выполнен в рамках <a href={specificationURL}> тестового задания </a>
			<br /> сообщества{' '}
			<a href={communityURL}>
				<i>Обучение “Без воды” - Frontend / React / Redux</i>
			</a>.
		</p>
		<footer className="blockquote-footer">
			<a href={vkURL}>Пахотин Иван</a> <time dateTime="2018-05-19">19 мая 2018</time>
		</footer>
	</blockquote>
);
