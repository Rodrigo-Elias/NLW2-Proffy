import axios from 'axios';

const api = axios.create({
    //Has to be the expo adress changing the port for the server port and exp for http
    baseURL: 'http://192.168.0.3:3333'
});

export default api;