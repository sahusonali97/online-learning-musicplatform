import React, {useState,useEffect} from 'react';
import Header from './Header';
import Footer from './Footer';
import Helper from '../auth/Helper';

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import html2canvas from 'html2canvas';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';


const Summercamp_Thanks =(props)=>{

    const [userId,setUserId] = useState(0); 
    const [clientSecret, setClientSecret] = useState("");
    const [numPages, setNumPages] = useState(null);

    const appearance = {
        theme: 'stripe',
      };
    const options = {
        clientSecret,
        appearance,
      };

      useEffect(async()=>{
        await Helper.getAtuhData().then((result)=>{
            let user_id  = result.id;
            localStorage.setItem('user_id',user_id);
            setUserId(user_id);
        });
    },[setUserId]);



    function onDocumentLoadSuccess({ numPages: nextNumPages }) {
        setNumPages(nextNumPages);
      }

    function onDocument2Canvas() {
        const input = document.getElementById('divToPrint');
        const input2 = document.querySelector("canvas");
        console.log(input);
        console.log(input2);
        let canvas =html2canvas(input2)
        .then((canvas) => {
            var link = document.createElement('a');
            link.setAttribute('download', 'Certificate.png');
            link.setAttribute('href', canvas.toDataURL("image/png").replace("image/png", "image/octet-stream"));
            link.click();
        }); 
                  
    }
  
  const  downloadDemoCertificate = () =>{
    let file_new = '/certificates/summer_certificate_'+userId+'.pdf';
    //let file_new = 'http://localhost:3000/uploads/Jayshri_Yadav.pdf';
    console.log(file_new);
    const input = document.getElementById('divToPrint');
               confirmAlert({ 
                   customUI: ({ onClose }) => {
                     
                     return (           
                       <div class="take_modal">
                       <div class="take_modal_inner model_summer_certificate">
                           <div class="take_modal_header">
                               <h5 class="take_modaltitle" id="pdfViewer">Certificate Preview</h5>
                               <button onClick={() => { onClose(); }} type="button" class="close" data-dismiss="modal" aria-label="Close">
                                 <span aria-hidden="true">&times;</span>
                               </button>
                             </div>
                             <div class="take_modal_body">
                                 <div class="take_step_wrapper">
                                 <div className="Example__container__document" id="divToPrint">
                                        <Document file={file_new} onLoadSuccess={onDocumentLoadSuccess} options={options} id="divToPrint">
                                       {Array.from(new Array(numPages), (el, index) => (
                                           <Page key={`page_${index + 1}`} pageNumber={index + 1} />
                                       ))}
                                       </Document>
                                 </div> 
                          
                                     <div class="take_step_btns">
                                       
                                          <a onClick={onDocument2Canvas}  class="take_btn take_next">
                                             Download 
                                         </a>
                                        
                                        
                                     </div>
                                 </div>
                             </div>
                       </div>
                   </div>
                     );
                   }
                 }); 
}



	return (
			<>
				<Header  />
				
                <div class="take_error_wrapper thankyoupage">
                    <img src="assets/images/like.png" alt="" class="img-fluid" />
                    <h1><span class="take_orange">Thank you we recieved <br/>your form</span></h1>
                    <p> April 18th to 22nd (Monday to Friday)</p>
                  
                    <a  href="javascript:;" class="take_btn live_link" onClick={(event) => downloadDemoCertificate()}> Certificate</a>
                   
                </div>
                
				<Footer/>
		</>
	);
	
}
export default Summercamp_Thanks;