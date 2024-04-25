import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:8080', // Set the allowed origin
        
    },
    withCredentials: true, // Include credentials such as cookies in the request
    crossDomain: true, // Allow cross-domain requests
});

export default instance;
