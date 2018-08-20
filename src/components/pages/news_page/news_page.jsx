import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { loadNews } from 'actions/news_actions';
import News from 'components/news/news.jsx';

class NewsPage extends PureComponent {
	static propTypes = {
		news: PropTypes.array,
		error: PropTypes.string,
		loadNews: PropTypes.func.isRequired
	};

	componentDidMount() {
		this.props.loadNews();
	}

	render() {
		return (
			<div className="container">
				{this.props.news.map(({ id, title, text }) => (
					<News key={id} title={title}>
						{text}
					</News>
				))}
			</div>
		);
	}
}

const mapStateToProps = state => ({
	news: state.news.news,
	error: state.news.errorMsg
});

const mapDispatchToProps = dispatch => ({
	loadNews: bindActionCreators(loadNews, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsPage);
