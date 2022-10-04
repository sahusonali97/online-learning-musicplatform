import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';


const Term =(props)=>{

    useEffect(()=>{
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
          });
	});

	return (
			<>
				<Header  />
				
                <div class="take_section take_privacy_wrapper ">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                            <div class="take_heading_wrapper">
                                <h2 className="h2">Terms and Conditions</h2>
                            </div>
                            <h4>User Agreement</h4>
                            <p>This User Agreement (“Agreement”) comprises a set of rules and regulations and privacy policy that is declared in agreement with the legal requirement under the Information Technology Act, 2000 and Rule 3 (1) of the Information Technology (Intermediaries Guidelines) Rules, 2011 as relevant and revised from time to time. This Agreement does not require physical or digital signature approval. You have consented to the terms and conditions of this Agreement by using this website www.Take5music.in ("Website") (whether or not using the services). If you do not agree with the terms of this Agreement, you may choose not to access the Website.</p>
                            <h4>Use of Personal Information </h4>
                            <p>This Website is owned and operated by Take5 Music., and we at Take5 Music ("Take5 Music"/"we"/"us"/"our") value your privacy and steadily strive to maintain the confidentiality of personal information given by you on our website. This Agreement, which includes the Privacy Policy, outlines in detail how we collect and use your data on the Website. As a customer/visitor to the Website ("you"/"your"), you should carefully read this Agreement. By using the Website's services, you consent to the collection and use of your data by us in the way specified in this Agreement.</p>

                            <h4> Website Access</h4>
                            <p>We grant you limited access and personal use of this Website, and you agree not to download (either for page caching) or change it, or any portion of it, unless we expressly grant you express writing permission to do so. This permission does not allow for the resale or commercial use of this Website or its contents; the collection and use of any descriptions, or prices; any derivative use of this Website or its contents; the downloading or copying of account information for the benefit of another merchant; or the use of data mining, robots, or similar data gathering and extraction tools. You expressly agree not to reproduce, duplicate, copy, sell, resell, visit, or otherwise use for any commercial purpose without our express written approval. Without Take5 Music’s express written approval, you may not frame or use framing methods to enclose any trademark, logo, or other proprietary material (including images, text, page layout, or form) of the Website or its associates. Without our prior written authorization, you may not utilize any meta tags or other "hidden text" utilizing www.Take5music.in or Take5 Music’s name or trademarks. Any unauthorized usage results in the termination of the authorization or license given by us.</p>

                            <h4>Account Registration and Obligations </h4>
                            <p> To join any online course of Take5 Music, all users must register and submit us with personal information. You must keep your account and registration information up to date and correct in order to receive communications regarding your courses from the Website. The customer agrees to receive promotional communications and newsletters upon registration by consenting to the terms and conditions. The consumer has the option of opting out by unsubscribing upon receipt of the first letter or by contacting customer care.</p>


                            <h4> Pricing</h4>
                            <p> Once the customer enrols for any of our Courses through our website, Take5 Music will send the customer an email, text message or message via e-mail confirming the details of the schedules. For each enrolment, we would issue a system-generated invoice to the customer in relation to the Course for which the customer has enrolled or in relation to any kind of payment done, as per applicable laws. The Course Fees, description, the schedule will be displayed to the customer before they make the payments. If a requested registration is cancelled (before any tuition is provided), any amounts collected by us will be returned to such a customer.
We also agree that no refund will be permitted in respect of courses already rendered and we permit the customer to cancel the enrolment before the start of the course.
</p>


                            <h4> Third-Party Links or Information </h4>
                            <p> This Website may comprise links to other websites that are not operated by or related to the Company. The company is not responsible for the content, accuracy or opinions expressed in such third-party websites, and does not investigate, monitor or check these websites for certainty or completeness. The incorporation of any linked website on this Website does not imply approval or endorsement of the linked website by the company. A user that leaves this Website to access these third-party sites does so at its own risk.</p>


                            <h4>Limitation Of Liability </h4>
                            <p> THE COMPANY DOES NOT IN ANY WAY EXCLUDE OR RESTRICT ITS LIABILITY FOR (I) DEATH OR PERSONAL INJURY CAUSED BY ITS NEGLIGENCE; (II) FRAUD OR FRAUDULENT MISREPRESENTATION; OR (III) ANY OTHER MATTER FOR WHICH IT WOULD BE ILLEGAL FOR THE COMPANY TO EXCLUDE OR ATTEMPT TO EXCLUDE ITS LIABILITY.</p>


                            <h4>You Agree and Confirm </h4>
                            <p> 1.	The consumer agrees to receive updates, order confirmation, and promotional messages / SMS / Email / Call from Take5 Music for current and future offers.

2.	In all cases where any information is asked of you, you will supply authentic and true information. We reserve the right, at any time, to confirm and validate the information and other details provided by you. If upon confirmation, your details are discovered to be fraudulent (wholly or partially), we hold the right, at our sole discretion, to decline your registration and prohibit you from using the services and/or other affiliated websites without prior notice.

3.	That you will only use the Website's, its affiliates', consultants', and contracted firms' services for legitimate purposes, and that you will follow all applicable laws and regulations when using and transacting on the Website.

4.	That you are using your best and reasonable judgment before participating in any transaction through this Website, and that you are accessing the services accessible on this Website and transacting at your entire risk.

5.	That all calls to/from our office may be recorded for quality assurance and training purposes.
</p>



                            <h4>Modification in Terms & Conditions </h4>
                            <p>We possess the right to change the Terms & Conditions of Use/ User Agreement at any time without prior notice to you. You can always find the most recent version of these Terms & Conditions on the Website. You should check the Website's Terms and Conditions on a frequent basis. If the updated Terms & Conditions are not agreeable to you, you should stop using this Website. However, if you continue to use the Website, you will be deemed to have agreed to accept and abide by the modified User Agreement Terms.</p>



                            <h4>Note </h4>
                            <p> We, as a company, shall bear no liability for any loss or damage occurring directly or indirectly from the decline of permission for any Transaction due to the Cardholder exceeding the present limit mutually agreed upon by us and our acquiring bank from time to time.</p>

                    

                        
                    </div>
                    
                </div>
            </div>
        </div>
                
				<Footer/>
		</>
	);
	
}
export default Term;