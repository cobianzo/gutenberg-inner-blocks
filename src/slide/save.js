import { __ } from '@wordpress/i18n';

import { useBlockProps } from '@wordpress/block-editor';

export default function save() {
	const blockProps = useBlockProps.save();

	return <div { ...blockProps }> { __( 'Your block', 'aaa' ) } . </div>;
}
