/**
 * External dependencies
 */
import useSWR from 'swr';

/**
 * WordPress dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';
import { useEffect, useState } from '@wordpress/element';

/**
 * Internal dependencies
 */
import './editor.scss';

/**
 * Edit function
 */
export default function Edit(props) {

	console.log(props.attributes)

	// init props and attributes for block
	const  { 
		attributes: {symbol} 
		} = props
	
	const blockProps = useBlockProps()


	// const { symbol } = props
	console.log(props)

	const fetcher = ( ...args ) =>
		fetch( ...args ).then( ( res ) => res.json() );
	const { data, error, isLoading } = useSWR(
		'https://api.imgflip.com/get_memes',
		fetcher
	);
	const retrievedData = data?.data?.memes;

	console.log("Symbol default: ", symbol)
	return (
		
		<p { ...useBlockProps() }>
			{ ! isLoading
				? `Loaded ${ retrievedData.length } items`
				: 'Loading...' }
		</p>
	);
}