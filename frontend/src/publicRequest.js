import axios from 'axios';

// Server Url
const url = 'http://localhost:5000/api/';

// Public Request
export const publicRequest = axios.create({
    baseURL: url,
})