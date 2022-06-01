import { __ } from '@wordpress/i18n';

import { useBlockProps } from '@wordpress/block-editor';

import './editor.scss';

export default function Edit( { attributes, isSelected } ) {
	const url = 'https://via.placeholder.com/300';
	const alt = 'Text alt';
	return (
		<section { ...useBlockProps() }>
			<div className="wrapper-slide">
				<picture>
					<img src={ url } alt={ alt } />
				</picture>
				<div className="wrapper-slide-content">
					<h4>Title here</h4>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					</p>
				</div>
			</div>
		</section>
	);
}
