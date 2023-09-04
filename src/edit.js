/**
 * External dependencies - React.js
 */
import useSWR from 'swr';
import { debounce } from "debounce";
import { useEffect } from '@wordpress/element'


/**
 * WordPress dependencies - Block Editor
 */
import { useBlockProps } from '@wordpress/block-editor';
import { __experimentalInputControl as InputControl } from '@wordpress/components';

/**
 * Internal dependencies
 */
import './editor.scss';

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
	
	const TickerControl = () => {
		
		const debouncedOnChange = debounce(onChangeHandler, 5000);

		const customInputControl = 
			<InputControl
				label="Stock symbol"
				placeholder={ticker.default}
				value={ticker}
				onChange={debouncedOnChange} 
			/>;

		console.log("Waited!!")

		return customInputControl
		
	}

	return <TickerControl />

	// displays when the block is created in the editor (Block Editor display)
}