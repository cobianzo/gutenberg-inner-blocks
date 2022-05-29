import { __ } from '@wordpress/i18n';

import { useBlockProps } from '@wordpress/block-editor';

import './editor.scss';

export default function Edit() {
	return (
		<p { ...useBlockProps() }>
			{ __( 'My Inner – hello from the editor!', 'my-inner' ) }
		</p>
	);
}
