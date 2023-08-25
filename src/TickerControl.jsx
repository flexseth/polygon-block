import { __experimentalInputControl as InputControl } from '@wordpress/components';
import { useState } from '@wordpress/element';

const TickerControl = () => {
  const [ value, setValue ] = useState( '' );

  return (
     <InputControl 
        
     // doing things 
        value={ value }
         onChange={ ( nextValue ) => setValue( nextValue ?? '' ) }
        
         // helpers
         help="Help text to describe the control."
         label="Value"
         placeholder="Placeholder"
       
     />
  );
};
export default TickerControl