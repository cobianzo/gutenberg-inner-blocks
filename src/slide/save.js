import { __ } from '@wordpress/i18n';

import { Fragment } from '@wordpress/element';
import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save( props ) {
	const attrs = props.attributes;
	console.log( 'prps save: ', props );
	return (
		<Fragment>
			<hr className="container-start hidden" />
			<section { ...useBlockProps.save( { className: 'slide' } ) }>
				{ attrs.url ? (
					<Fragment>
						<picture>
							<img
								src={ attrs.url }
								alt={ attrs.alt }
								className={ `wp-image-${
									attrs.imgId ?? null
								}` }
							/>
						</picture>
						<div className="slide__content">
							{ attrs.title && (
								<RichText.Content
									tagName="h4"
									value={ attrs.title }
								/>
							) }
							{ attrs.description && (
								<RichText.Content
									tagName="p"
									value={ attrs.description }
								/>
							) }
						</div>
					</Fragment>
				) : (
					<p>no img</p>
				) }
			</section>
			<hr className="container-end hidden" />
		</Fragment>
	);
}
