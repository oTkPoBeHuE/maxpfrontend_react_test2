// process.env.PUBLIC_URL refers to homepage in package.json
const SOCIAL_ICONS_FOLDER = `${process.env.PUBLIC_URL}/social_icons`;

const VK_ICON = `${SOCIAL_ICONS_FOLDER}/vk_icon.png`;
const TELEGRAM_ICON = `${SOCIAL_ICONS_FOLDER}/telegram_icon.png`;
const WEB_ICON = `${SOCIAL_ICONS_FOLDER}/web_icon.png`;
const YOUTUBE_ICON = `${SOCIAL_ICONS_FOLDER}/youtube_icon.png`;
const TWITTER_ICON = `${SOCIAL_ICONS_FOLDER}/twitter_icon.png`;
const TWITCH_ICON = `${SOCIAL_ICONS_FOLDER}/twitch_icon.png`;

export function getIconByName(socialMediaSiteName) {
	switch (socialMediaSiteName) {
		case 'vk':
			return VK_ICON;
		case 'telegram':
			return TELEGRAM_ICON;
		case 'web':
			return WEB_ICON;
		case 'youtube':
			return YOUTUBE_ICON;
		case 'twitter':
			return TWITTER_ICON;
		case 'twitch':
			return TWITCH_ICON;
		default:
			return WEB_ICON;
	}
}
