import axios from 'axios';

//Get parameters from url by key
function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for(var i=0; i<vars.length; i++) {
        var pair = vars[i].split("=");
        if(pair[0] === variable) {
            return pair[1];
        }
    }
    return (false);
}

// Create instance called instance
const siteUrl = 'https://take5music.in/take5app1/studentApiDev/index.php/';
//const siteUrl = 'https://take5music.in/take5app1/studentApiDev/index.php/';



const siteUrlNews = 'https://news.take5music.in/api/';

const instance = axios.create({
    baseURL: siteUrl,
    headers: {
        'content-type': 'application/json',
        'Client-Service': 'frontend-client',
        'Auth-Key': 'b6a6af7226f48e3a75e9ecff44a212b92141'
    }
});


const instance1 = axios.create({
    baseURL: siteUrlNews,
    headers: {
        'content-type': 'application/json',
        'Client-Service': 'frontend-client',
        'Auth-Key': 'b6a6af7226f48e3a75e9ecff44a212b92141'
    }
});

export default {



    
    registerUserWithMail: (params) => {
        return axios.post(
            siteUrl + 'registerUserMobile',
            {
                'formdata': params
            }
        );
    },


     
    verifyRegisterOTP: (userid,otp) => {
        return axios.post(
            siteUrl + 'verifyRegisterOTP/'+userid+'/'+otp,
            {
                'formdata': ''
            }
        );
    },


    verifyForgotOTP: (userid,otp) => {
        return axios.post(
            siteUrl + 'verifyForgotOTP/'+userid+'/'+otp,
            {
                'formdata': ''
            }
        );
    },
   

    forgotpasswordUpdate: (params,user_id) => {
        return axios.post(
            siteUrl + 'forgotpasswordUpdate/'+user_id,
            {
                'formdata': params
            }
        );
    },

    sendDemoOTP: (user_id,country) => {
        return axios.post(
            siteUrl + 'sendDemoOTP/'+user_id+'/'+country,
            {
                'formdata': ''
            }
        );
    },

    
    


    loginWithEmail: (params) => {
        return axios.post(
            siteUrl + 'loginWithEmail',
            {
                'formdata': params
            }
        );
    },

    contactus: (params) => {
        return axios.post(
            siteUrl + 'contactus',
            {
                'formdata': params
            }
        );
    },


   getnews: () =>
    instance1({
        'method': 'GET',
        'url': 'getNews'
        
    }),
    


    classesTimeAvailable: () =>
    instance({
        'method': 'GET',
        'url': 'classesTimeAvailable'
        
    }),

    classesTimeAvailableAndDays: (user_id) =>
    instance({
        'method': 'GET',
        'url': 'classesTimeAvailableAndDays/'+user_id
        
    }),



    getGroupMember: (userId) => {
        // console.log(params);
         return axios.get(
             siteUrl + 'getGroupMember/'+userId,
         );
     },

     getGroupMember: (userId) => {
        // console.log(params);
         return axios.get(
             siteUrl + 'getGroupMember/'+userId,
         );
     },


    
    loginWithMobileAndEmail: (params) => {
        return axios.post(
            siteUrl + 'loginWithMobileAndEmail',
            {
                'formdata': params
            }
        );
    },

    submitStartCourseAPIDemo: (params) => {
        return axios.post(
            siteUrl + 'submitStartCourseAPIDemo',
            {
                'formdata': params
            }
        );
    },

    registerUserWithMobile: (params) => {
        return axios.post(
            siteUrl + 'registerUserWithMobile',
            {
                'formdata': params
            }
        );
    },


    UpdateProfile: (params) => {
        return axios.post(
            siteUrl + 'UpdateProfile',
            {
                'formdata': params
            }
        );
    },


    getTeacherList: () =>
    instance({
        'method': 'GET',
        'url': 'getTeacherList'
        
    }),


    getInstrument: () =>
    instance({
        'method': 'GET',
        'url': 'getInstrument'
        
    }),

    getBlogsData: () =>
    instance({
        'method': 'GET',
        'url': 'getBlogsData'
        
    }),



    

    getDemoClass: (user_id) =>
    instance({
        'method': 'GET',
        'url': 'getDemoClass/'+user_id
        
    }),


    getTodayClass: (user_id) =>
    instance({
        'method': 'GET',
        'url': 'getTodayClass/'+user_id
        
    }),
   


    getUpcommingClass: (user_id) =>
    instance({
        'method': 'GET',
        'url': 'getUpcommingClass/'+user_id
        
    }),

    getHistoryClass: (user_id) =>
    instance({
        'method': 'GET',
        'url': 'getHistoryClass/'+user_id
        
    }),


    getScheduledClass: (user_id) =>
    instance({
        'method': 'GET',
        'url': 'getScheduledClass/'+user_id
        
    }),

    getClassTime: () =>
    instance({
        'method': 'GET',
        'url': 'getClassTime'
        
    }),

    findClasses: (teacherid) =>
    instance({
        'method': 'GET',
        'url': 'findClasses/'+teacherid
        
    }),


    review_rating: (params,userId,rating) => {
        return axios.post(
            siteUrl + 'review_rating/'+userId+'/'+rating,
            {
                'formdata': params
            }
        );
    },


    getPlanList: (userId) =>
    instance({
        'method': 'GET',
        'url': 'getPlansBycountry/'+userId
        
    }),
    


    
    getPaymentHistory: (user_id) =>
    instance({
        'method': 'GET',
        'url': 'getPaymentHistory/'+user_id
        
    }),


    StudentChangePassword: (params,userId) => {
        return axios.post(
            siteUrl + 'StudentChangePassword/'+userId,
            {
                'formdata': params
            }
        );
    },

    getTeacherById: (teacherId) =>
    instance({
        'method': 'GET',
        'url': 'getTeacherById/'+teacherId
        
    }),



    getBookedClassData: (user_id) =>
    instance({
        'method': 'GET',
        'url': 'bookedClasses/'+user_id
        
    }),

    getStudentProfile: (user_id) =>
    instance({
        'method': 'GET',
        'url': 'getStudentProfile/'+user_id
        
    }),


    forgotpasswordWithEmailANDMobile: (params) => {
        return axios.post(
            siteUrl + 'forgotpasswordWithEmailANDMobile',
            {
                'formdata': params
            }
        );
    },

    forgotpasswordWithMobile: (params) => {
        return axios.post(
            siteUrl + 'forgotpasswordWithMobile',
            {
                'formdata': params
            }
        );
    },

    loginUserWithMailMobile: (params) => {
        return axios.post(
            siteUrl + 'loginUserWithMailMobile',
            {
                'formdata': params
            }
        );
    },

    registerTeacherWithMail: (formdata,selectedFile) => {
        console.log(formdata);
        const formData = new FormData();
        formData.append("selectedFile", selectedFile);
        formData.append("params", formdata);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        return axios.post(
            siteUrl + 'registerTeacherMobile',
            formData, 
            config
        );
    },
              

    stripePayment: (params) => {
        return axios.post(
            siteUrl + 'stripePayment',
            {
                'formdata': params
            }
        );
    },


    paymentStripeSuccess: (params) => {
        return axios.post(
            siteUrl + 'paymentStripeSuccess',
            {
                'formdata': params
            }
        );
    },


    getNextPaymentDate: (user_id) =>
    instance({
        'method': 'GET',
        'url': 'getNextPaymentDate/'+user_id
        
    }),


    studentloginbyadmin: (user_id) =>
    instance({
        'method': 'GET',
        'url': 'studentloginbyadmin/'+user_id
        
    }),


    getProfileData: (user_id) =>
    instance({
        'method': 'GET',
        'url': 'getProfileData/'+user_id
        
    }),


    updateProfileImage: (formData) => {
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        return axios.post(
            siteUrl + 'userImageUpdate',
            formData, 
            config
        );
    },



    UpdateProfile: (params) => {
        return axios.post(
            siteUrl + 'UpdateProfile',
            {
                'formdata': params
            }
        );
    },


    downloadDemoCertificate: (params) => {
        // console.log(params);
         return axios.post(
             siteUrl + 'downloadDemoCertificate/1',
             {
                 'formdata': params
             }
         );
     },
    getDemoCertificate: (params) => {
        // console.log(params);
         return axios.get(
             siteUrl + 'uploads/'+params,
         );
     },
    

     getUsersPaymentList: (user_id) =>
    instance({
        'method': 'GET',
        'url': 'getUsersPaymentList/'+user_id
        
    }),
    
    
}