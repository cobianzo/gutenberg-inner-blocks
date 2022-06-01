import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import Edit from './edit';
import Save from './save';

registerBlockType( 'cobianzo/slide', {
	title: __( 'Single Slide', 'aaa' ),
	description: __( 'A team member item', 'aaa' ),
	icon: 'admin-users',
	parent: [ 'cobianzo/my-inner' ],
	supports: {
		reusable: false,
		html: false,
	},
	attributes: {
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
	edit: Edit,
	save: Save,
} );
