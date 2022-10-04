import React, { useState } from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Audio } from  'react-loader-spinner';

const Loader =(props)=>{

   // const [isLoading, setLaoding] = useState(true);
   


	return (
			<div className="loader">
			     
    <Audio
        heigth="30"
        width="30"
        color='#F68B00 '
        ariaLabel='loading'
    />
                
			
		</div>
	);
	
}
export default Loader;