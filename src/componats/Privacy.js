import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';


const Privacy =(props)=>{

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
                                
                                    <div class="take_heading_wrapper ">
                                        <h2 className="h2">Privacy Policy</h2>
                                    </div>
                                    <p>Take5 Music (hereinafter referred to as “We”, “Us”, “Company” or “Our”) is mindful of the privacy of all those who use its website (hereinafter referred to as “You”, “Your” or “User”) located at https://www.take5music.in. The purpose of this privacy policy statement or simply “Privacy Policy” is to inform you of how ‘We’ collect, use and disclose information about You collected on the Site.

Take5 Music values your privacy and wants you to understand how we collect, handle, and share information via this Privacy Policy. This covers our practices regarding information collected by us or our service providers via the website or application (hence the "Service") from which you are accessing this Privacy Policy.  By providing personal information to us or by using the Service, you acknowledge that you have read and understood this Privacy Policy.
</p>
                          
                                <h4>User Information</h4>
                                <p>This is a set of data, which includes your basic information like name, phone number, email ID, postal address, etc. that is needed to uniquely recognize or contact you to provide some of the services offered by us. Also, we may request certain demographic information such as your age, and gender. 

                                    We may seek, gather, and securely save personal information about you as part of the process of creating your account on our Site. You are only compelled to share information if you choose to do so voluntarily. Certain actions, such as registering with us or enrolling in online classes require you to register on Our Site.

                                    We may use the personal information you have opted to provide us with to provide you with personalized services and to allow you to access our website. We may, for example, recommend courses that you might be interested in. This personalized information may be delivered to you via email, text messages/SMS, or phone calls.

                                    Note: If you are under the age of 13, your parent or guardian's consent is necessary before you provide any personal information to us for purposes of registration and/or other online activities.
                                    </p>

                                    <h4>Reviewing and changing personal information </h4>
                                    <p>You may at any time review and/or update the contact information we have for you or inform us that you want us to remove such information from our database by contacting us at: hello@take5music.in.  You must provide us with information on the activities you participated in which requested personal information. Before we can change or delete any information, we require that you provide us with proof of your name and address. Once we receive such proof, we will immediately delete or modify your information and abstain from collecting any other personally identifiable information from you, if you request. Please note, however, that there may be some residual data that may prevail in our databases that may or may not contain personally identifiable information. We will not present this information to any third party, or use it for any commercial purpose.</p>

                                    <h4>Notifications</h4>
                                    <p>If you have decided to share us with your contact information, we may send you service-related announcements about the website by any means, including email, or contact you regarding your customer service requests or queries. For example, all registered users will receive a welcome email to confirm their registration. These types of contracts are required in order to serve you, respond to your issues, and deliver a high level of customer care.</p>



                                    <h4>Opt-out</h4>
                                    <p>If you do not want Take5 Music to send you an e-mail or regular mail about our services, you can choose to opt-out and have your name removed from Take5 Music's e-mailing list by using the link included with a Take5 Music e-mail or by sending an e-mail to  hello@take5music.in.  Take5 Music will occasionally send emails announcing changes or enhancements to our site or services. If you do not wish to receive these announcements, please notify  hello@take5music.in

                                    Students enrolled in a course or program with Take5 Music are automatically opted in to receive all email communications. Most communication between Take5 Music and its student body is conducted in this manner.

                                    The various emails keep students up to date on:
                                    •	Modifications to existing courses and programs
                                    •	New courses and programs
                                    •	Special opportunities and offers from our industry partners are only offered to our students!
                                    •	Other major announcements
                                    •	In order to ensure all students are kept up to date on the happenings of the online school, we need to be able to communicate through email.

                                    </p>


                                    <h4>Security</h4>
                                    <p>Our systems are configured with best-in-class secure server software to safeguard you against any and all unlawful action, including access or alteration or disclosure or destruction of information we have on file for you. Following this, we:

                                        Use secure server software to encrypt our services, securing all of your activity on our site, including transactions. We also keep illegal access to systems at bay by conducting regular audits of our information collecting, storage, and processing methods.

                                        Your Personal Information is protected, and We do not rent, sell, or share it with third parties or unaffiliated firms for any reason other than to provide the services you have requested. 

                                        We make every effort to employ reasonable organizational, technical, and administrative guidelines to protect personal information under our control. Unfortunately, no data transfer or data storage technology can be guaranteed to be completely safe. If you have reason to suspect that your interaction with us is no longer safe (for example, if the security of any account you have with us has been compromised), please notify us immediately by contacting us.
                                        </p>


                                  


                                    <h4>Disclaimer</h4>
                                    <p>Company shall not be liable for any loss or damage incurred as a result of any disclosure (inadvertent or otherwise) of any information concerning the user's account and/or their verification process and particulars, nor for any error, omission, or inaccuracy concerning any information so disclosed and used, whether or not in accordance with a legal process or otherwise. The company has the right to amend the terms of this agreement at any time. The company is free to offer its services to any client/prospective client.

                                    All courses registered on the Site must adhere to the terms and limitations mentioned on the Site ("User Agreement").

                                    By registering or using this Site, you expressly consent to the collection, use, and transfer of the Personal Information you supply in the way indicated in this Privacy Policy, without restriction or qualification.

                                    Please read this Privacy Policy carefully because it impacts your legal rights and liabilities. Please do not use the Site if you do not accept the Privacy Policy described therein or if you disagree with how we gather and process personal information collected on it.
                                    </p>

                                    <h4>Contact Information</h4>
                                    <p>Take5 Music’s Administrative Secretary shall undertake all reasonable efforts to address your concerns at the earliest possible opportunity. You may contact it at:

                                        *Address*

                                        Reach out to us on hello@take5music.in in case of any queries.
                                        </p>  
                              
                            </div>
                            
                        </div>
                    </div>
                </div>

                
				<Footer/>
		</>
	);
	
}
export default Privacy;