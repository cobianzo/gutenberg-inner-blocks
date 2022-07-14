import { __ } from '@wordpress/i18n';
import IconPlay from './slide/small-chunks/IconPlay';

import { useRef, Fragment, useState, useEffect } from '@wordpress/element';
import { useSelect } from '@wordpress/data';

import {
	useBlockProps,
	InnerBlocks,
	BlockControls,
} from '@wordpress/block-editor';

import './editor.scss';

const ALLOWED_BLOCKS = [ 'cobianzo/slide' ]; // [ 'core/image' ];

export default function Edit( { attributes, ...pepe } ) {
	const sliderRef = useRef(); // to call the button "+" (adds inner block) click event
	//console.log( 'Just testint,', pepe );

	useSelect( ( select ) => {
		console.log( 'TODELETE:: ', select( 'core' ) );
	} );

	const [ previewMode, setPreviewMode ] = useState( false );

	// watch toggle previewMode slider group
	useEffect( () => {
		return;

		// this returns error: Should not already be working. - when deactivating preview mode
		if ( previewMode && window.lastSlideSelected ) {
			console.log(
				'last Slide for preview mode: ',
				window.lastSlideSelected
			);
			// sliderRef.current.classList.add( 'preview-mode' );

			// add the class to show only the last selected slide, and only to that slide.
			sliderRef.current
				.querySelectorAll( '.slide-parent' )
				.forEach( ( slideEl ) => {
					slideEl.classList.remove( 'preview-isolated' );
				} );
			sliderRef.current
				.querySelector(
					'section[data-block="' + window.lastSlideSelected + '"]'
				)
				?.classList.add( 'preview-isolated' );
		} else {
			alert( 'no preview' );
		}
	}, [ previewMode ] );

	return (
		<Fragment>
			<BlockControls
				controls={ [
					{
						icon: 'plus',
						title: __( 'Add Slide', 'aaa' ),
						onClick: () => {
							console.log( sliderRef );
							sliderRef.current
								.querySelector(
									'.block-list-appender .components-button.block-editor-button-block-appender'
								)
								.click();
						},
						// isActive: shadow,
					},
					{
						icon: IconPlay,
						title: __( 'Preview mode', 'aaa' ),
						onClick: () => {
							alert( 'clicked' );
							setPreviewMode( ! previewMode );
						},
						isActive: previewMode,
					},
				] }
			></BlockControls>
			<section
				{ ...useBlockProps( {
					className:
						'slider-paarent ' +
						( previewMode ? ' preview-mode' : '' ),
					// ( isParentOfSelectedBlock
					// 	? 'selected-inner-slide'
					// 	: 'not-selected-inner-slide' ),
				} ) }
			>
				<InnerBlocks
					ref={ sliderRef }
					allowedBlocks={ ALLOWED_BLOCKS }
					orientation="horizontal"
					template={ [ ALLOWED_BLOCKS ] }
					renderAppender={ () => <InnerBlocks.ButtonBlockAppender /> }
				/>
			</section>
		</Fragment>
	);
}
