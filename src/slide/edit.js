import { __ } from '@wordpress/i18n';
import { instructions } from './small-chunks/instructions';
import IconDelete from './small-chunks/IconDelete';
import { useSelect, useDispatch } from '@wordpress/data';

// import IconPlay from './small-chunks/IconPlay';
import {
	Panel,
	PanelBody,
	PanelRow,
	SelectControl,
} from '@wordpress/components';

import {
	useBlockProps,
	BlockControls,
	MediaUploadCheck,
	MediaUpload,
	RichText,
	useInnerBlocksProps,
	InspectorControls,
} from '@wordpress/block-editor';

import { useState, useEffect } from '@wordpress/element';

import { Button } from '@wordpress/components';

import './editor.scss';

const ALLOWED_MEDIA_TYPES = [ 'image' ];

export default function Edit( props ) {
	const { attributes, setAttributes, isSelected } = props;

	const url = attributes.url; // 'https://via.placeholder.com/300';
	const alt = attributes.alt;
	const imgId = attributes.imgId;
	// const [ previewMode, setPreviewMode ] = useState( false );

	const wpImgSizes = useSelect(
		( select ) => select( 'core/block-editor' ).getSettings().imageSizes
	);
	const getCurrentImgSizes = () => {
		if ( ! attributes.imgId ) return [];
		// get all sizes for this img
		const imgInfo = useSelect( ( select ) =>
			select( 'core' ).getMedia( attributes.imgId )
		);
		console.log( 'current img sizes;, ;,', imgInfo );
		if ( ! imgInfo ) return [];
		const returnValidOptions = [];
		//console.log( imgInfo[media_details] );
		for ( const sizeSlugKey in imgInfo.media_details.sizes ) {
			// is the size in the preset wp sizes?
			if (
				wpImgSizes.find( ( preset ) => preset.slug === sizeSlugKey )
			) {
				returnValidOptions.push( {
					value:
						imgInfo.media_details.sizes[ sizeSlugKey ].source_url,
					label: sizeSlugKey,
				} );
			}
		}
		return returnValidOptions;
	};

	console.log( 'IMG sizes', wpImgSizes );
	// watch isSelected
	useEffect( () => {
		if ( isSelected ) {
			console.log( 'Slide Selected', props );
			window.lastSlideSelected = props.clientId; // to communicate with the parent block.
			// props.context[ 'cobianzo/currentSlide' ] = props.clientId; // this doesnt work in the parent
		}
		return () => console.log( 'Slide de-selected', props.clientId );
	}, [ isSelected ] );

	// testing things
	const innerBlockProps = useInnerBlocksProps();
	console.log( 'slide Blockprops:', useBlockProps() );
	console.log( 'slide innerblockprops:', innerBlockProps );
	return (
		<section
			{ ...useBlockProps( {
				className: `slide-parent ${
					attributes.url ? 'has-img' : 'no-img'
				} ${ ! isSelected && 'not-selected' }`,
			} ) }
		>
			<BlockControls
			// controls={ [
			// 	{
			// 		icon: IconPlay,
			// 		title: __( 'Preview mode', 'aaa' ),
			// 		onClick: () => setPreviewMode( ! previewMode ),
			// 		isActive: previewMode,
			// 	},
			// ] }
			></BlockControls>
			<InspectorControls key="setting">
				<Panel header={ __( 'Slide Settings', 'aaa' ) }>
					<PanelBody
						title={ __( 'Image settings', 'aaa' ) }
						initialOpen={ true }
					>
						{ attributes.imgId ? (
							<fieldset>
								{ __( 'Size of the image' ) +
									` (${ attributes.imgId })` }
								<SelectControl
									value={ attributes.url }
									options={ getCurrentImgSizes() }
									onChange={ ( newSize ) =>
										setAttributes( { url: newSize } )
									}
									__nextHasNoMarginBottom
								/>
								<pre
									style={ {
										position: 'absolute',
										marginTop: '-20px',
										fontSize: '9px',
									} }
								>
									{ attributes.url }
								</pre>
							</fieldset>
						) : (
							<p>no img selected</p>
						) }
					</PanelBody>
				</Panel>
			</InspectorControls>
			<div className="slide">
				{ ! url ? (
					<MediaUploadCheck fallback={ instructions }>
						<MediaUpload
							title={ __( 'Background image', 'aaa' ) }
							onSelect={ ( media ) => {
								const { url, alt, id: imgId } = media;
								console.log( 'media: ', media, url );
								setAttributes( { url, alt, imgId } );
							} }
							allowedTypes={ ALLOWED_MEDIA_TYPES }
							value={ attributes.url }
							render={ ( { open } ) => (
								<Button
									className={ 'slide__image-button' }
									onClick={ open }
								>
									{ __( 'Set background image', 'aaa' ) }
								</Button>
							) }
						/>
					</MediaUploadCheck>
				) : (
					<picture>
						<img className="slide__img" src={ url } alt={ alt } />
						<button
							className="slide_delete-img-btn"
							onClick={ () =>
								setAttributes( {
									url: null,
									alt: '',
									imgId: null,
								} )
							}
						>
							<IconDelete />
						</button>
					</picture>
				) }
				<div className="slide__content">
					<RichText
						// ref={ titleRef }
						placeholder={ __( 'Title Here', 'aaa' ) }
						tagName="h4"
						onChange={ ( title ) => setAttributes( { title } ) }
						value={ attributes.title }
						allowedFormats={ [] }
					/>
					<RichText
						placeholder={ __( 'Description Here', 'aaa' ) }
						tagName="p"
						onChange={ ( description ) =>
							setAttributes( { description } )
						}
						value={ attributes.description }
						// allowedFormats={ [] }
					/>
				</div>
			</div>
		</section>
	);
}
