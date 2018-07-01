import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { getUserProfile } from 'actions/profile_actions';
import { Redirect } from 'react-router-dom';
import News from 'components/news/news.jsx';

import { getIconByName } from './social_pages.js';

import './profile.css';

function webIsAlwaysFirstInListComparator(left, right) {
	const FIRST_SOCIAL = 'web';
	return left.label === FIRST_SOCIAL ? -1 : right.label === FIRST_SOCIAL;
}

const SocialUrl = ({ link, label }) => (
	<a href={link}>
		<img src={getIconByName(label)} alt={label} />
	</a>
);

class ProfilePage extends PureComponent {
	componentDidMount() {
		this.props.getUserProfile(this.props.id);
	}

	render() {
		const data = this.props.data;
		return data ? (
			<div className="maxpf-test2-profile_page_container">
				<p>Город: {data.city} </p>
				<ul>{data.languages.map((language, index) => <li key={index}>{language}</li>)} </ul>
				<ul className="maxpf-test2-profile_page_social">
					{data.social
						.sort(webIsAlwaysFirstInListComparator)
						.map((social, index) => <SocialUrl key={index} link={social.link} label={social.label} />)}
				</ul>
			</div>
		) : null;
	}
}

const mapStateToProps = state => {
	console.log('state', state);
	return {
		id: state.session.user.id,
		data: state.profile.data,
		errorMsg: state.profile.errorMsg
	};
};

const mapDispatchToProps = dispatch => ({
	getUserProfile: bindActionCreators(getUserProfile, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
