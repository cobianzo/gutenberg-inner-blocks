import { registerBlockType } from '@wordpress/blocks';
import './slide';

import './style.scss';

import edit from './edit';
import save from './save';

registerBlockType( 'cobianzo/my-inner', {
	edit,
	save,
} );
