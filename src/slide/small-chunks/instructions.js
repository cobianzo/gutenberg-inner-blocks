import { __ } from '@wordpress/i18n';

export function instructions() {
	return (
		<p>
			{ __(
				'To edit the background image, you need permission to upload media.',
				'aaa'
			) }
		</p>
	);
}
