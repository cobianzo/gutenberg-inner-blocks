import { __ } from '@wordpress/i18n';

import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

import './editor.scss';

const ALLOWED_BLOCKS = [ 'cobianzo/slide' ]; // [ 'core/image' ];

export default function Edit() {
	return (
		<section { ...useBlockProps() }>
			<InnerBlocks
				allowedBlocks={ ALLOWED_BLOCKS }
				orientation="horizontal"
				template={ [ ALLOWED_BLOCKS ] }
			/>
		</section>
	);
}
