import Login from 'components/pages/login_page/login_page';
import Home from 'components/pages/home_page/home_page';
import Profile from 'components/pages/profile/profile';
import News from 'components/pages/news_page/news_page';
import NotFound from 'components/pages/error_page/error_page';
import Logout from 'components/pages/logout/logout';

export default [
	{
		isInNavBar: true,
		isExact: true,
		path: '/',
		name: 'На главную',
		component: Home
	},
	{
		isInNavBar: true,
		path: '/news',
		name: 'Новости',
		component: News
	},
	{
		isInNavBar: true,
		path: '/profile',
		name: 'Профиль',
		component: Profile,
		isPrivate: true
	},
	{
		isInNavBar: true,
		path: '/login',
		name: 'Войти',
		component: Login
	},
	{
		isInNavBar: true,
		path: '/logout',
		name: 'Выйти',
		component: Logout
	},
	{
		isInNavBar: false,
		name: '404 Not Found',
		component: NotFound
	}
];
