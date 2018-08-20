import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { getUserProfile } from 'actions/profile_actions';

import { getIconByName } from './social_pages.js';

import './profile.css';

function webIsAlwaysFirstInListComparator(left, right) {
	const FIRST_SOCIAL = 'web';
	return left.label === FIRST_SOCIAL ? -1 : right.label === FIRST_SOCIAL;
}

class ProfilePage extends PureComponent {
	static propTypes = {
		id: PropTypes.number,
		errorMsg: PropTypes.string,
		getUserProfile: PropTypes.func.isRequired,
		data: PropTypes.shape({
			social: PropTypes.array.isRequired,
			languages: PropTypes.array.isRequired,
			city: PropTypes.string.isRequired,
			userId: PropTypes.number.isRequired
		})
	};

	componentDidMount() {
		this.props.getUserProfile(this.props.id);
	}

	renderSocialUrl = ({ link, label }, index) => (
		<a href={link} key={label}>
			<img src={getIconByName(label)} alt={label} />
		</a>
	);

	renderlanguage = (language, index) => <li key={index}>{language}</li>;

	get socialUrls() {
		return this.props.data.social.sort(webIsAlwaysFirstInListComparator).map(this.renderSocialUrl);
	}

	get languagesList() {
		return this.props.data.languages.map(this.renderlanguage);
	}

	render() {
		return this.props.data ? (
			<div className="maxpf-test2-profile_page_container">
				<p>Город: {this.props.data.city} </p>
				<ul>{this.languagesList}</ul>
				<ul className="maxpf-test2-profile_page_social">{this.socialUrls}</ul>
			</div>
		) : null;
	}
}

const mapStateToProps = state => ({
	id: state.session.user.id,
	data: state.profile.data,
	errorMsg: state.profile.errorMsg
});

const mapDispatchToProps = dispatch => ({
	getUserProfile: bindActionCreators(getUserProfile, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
