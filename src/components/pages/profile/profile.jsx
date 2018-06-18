import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { getUserProfile } from 'actions/profile_actions';
import { Redirect } from 'react-router-dom';
import News from 'components/news/news.jsx';

class NewsPage extends PureComponent {
	componentDidMount() {
		this.props.getUserProfile(this.props.id);
	}

	render() {
		console.log('data', this.props.data);
		const data = this.props.data;
		return data ? (
			<div>
				<p>Город:{data.city} </p>
				<ul>{data.languages.map(language => <li>{language}</li>)} </ul>
				<ul>
					{data.social.map(social => (
						<li>
							<a href={social.link}>{social.label}</a>
						</li>
					))}
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

export default connect(mapStateToProps, mapDispatchToProps)(NewsPage);
