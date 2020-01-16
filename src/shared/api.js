import axios from 'axios';

export default axios.create({
    baseURL: endpoint,
    params: {
        key: KEY
    }
});