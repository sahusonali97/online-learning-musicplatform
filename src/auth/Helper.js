

const Helper = {
    getAtuhData: async() => {
        try {
            const authData = await window.localStorage.getItem('authData');
            const userData = JSON.parse(authData);
            if(userData != null) {
                return userData;
            } else{
                window.location.href = '/';
            }
        } catch(error) {
            console.log(error);
            window.location.href = '/';
        }
    }
}

export default Helper;