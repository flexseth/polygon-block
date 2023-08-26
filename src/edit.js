/**
 * External dependencies - React.js
 */
import useSWR from 'swr';

/**
 * WordPress dependencies - Block Editor
 */
import { useBlockProps } from '@wordpress/block-editor';
// import { useState } from '@wordpress/element';

/**
 * Custom WordPress components
 */
// import TickerControl from './TickerControl'
import { __experimentalInputControl as InputControl } from '@wordpress/components';
// import displayControl from './displayControl';

/**
 * Internal dependencies
 */
import './editor.scss';

/**
 * Data mapping
 */

/**
 * UI
 */
// import UI2 from './UI2';



/**
 * Edit function
 */
export default function Edit( props ) {

	const {
		attributes: {
			ticker
		},
		setAttributes
	} = props

	const onChangeHandler = (e) => {
		setAttributes( {ticker: e} )
	}


	return (
		<InputControl
			label="Stock symbol"
			placeholder={ticker.default}
			value={ticker}
			onChange={onChangeHandler}
		/>


	)


	// displays when the block is created in the editor (Block Editor display)
}