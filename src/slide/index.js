import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import IconSlide from './small-chunks/IconSlide';

import Edit from './edit';
import save from './save';

registerBlockType( 'cobianzo/slide', {
	title: __( 'Single Slide', 'aaa' ),
	description: __( 'A team member item', 'aaa' ),
	icon: IconSlide,
	// parent: [ 'cobianzo/my-inner' ],
	supports: {
		reusable: false,
		html: false,
	},
	attributes: {
		imgId: {
			type: 'number',
		},
		title: {
			type: 'string',
			source: 'html',
			selector: 'h4',
		},
		description: {
			type: 'string',
			source: 'html',
			selector: 'p',
		},
		alt: {
			type: 'string',
			source: 'attribute',
			selector: 'img',
			attribute: 'alt',
			default: '',
		},
		url: {
			type: 'string',
			source: 'attribute',
			selector: 'img',
			attribute: 'src',
		},
	},
	usesContext: [ 'cobianzo/currentSlide' ],
	edit: Edit,
	save,
} );
