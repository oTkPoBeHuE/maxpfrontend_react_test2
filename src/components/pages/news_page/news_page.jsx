import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { loadNews } from 'actions/news_actions';
import { Redirect } from 'react-router-dom';
import News from 'components/news/news.jsx';

class NewsPage extends PureComponent {
	componentDidMount() {
		this.props.loadNews();
	}

	render() {
		return (
			<div>
				{this.props.news.map(news => (
					<News key={news.id} title={news.title}>
						{news.text}
					</News>
				))}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		news: state.news.news,
		error: state.news.errorMsg
	};
};

const mapDispatchToProps = dispatch => ({
	loadNews: bindActionCreators(loadNews, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsPage);
