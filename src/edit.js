/**
 * External dependencies - React.js
 */
import useSWR from 'swr';
import { debounce } from "debounce";
import { useState, useEffect } from '@wordpress/element'


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

	const onChangeHandler = (newTicker) => {	
		setAttributes({ticker: newTicker})
	}

	const debouncedOnChange = debounce(onChangeHandler, 5000)

	const BlockProps = useBlockProps();

	const requestOpenClose = () => <Button variant="secondary">Search Open/Close</Button>;
	
	return ( 

		<div { ...BlockProps }>

			<InputControl 
				label="Stock symbol"
				placeholder={ ticker.default }
				value={ticker}
				onChange= { (newTicker) => {
					debouncedOnChange(newTicker)
					}
				}
			/>

		</div>
	); 

	// displays when the block is created in the editor (Block Editor display)

}