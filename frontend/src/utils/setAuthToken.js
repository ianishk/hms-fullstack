import axios from 'axios';

const setAuthToken=token=>{
    // console.log(token);
    if(token){
        axios.defaults.headers.common['x-auth-token']=JSON.parse(token).user;
    }
    else{
        delete axios.defaults.headers.common['x-auth-token'];
    }
}

export default setAuthToken;