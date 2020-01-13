import axios from 'axios';

const KEY = 't2d40OJLR1UlPtriH6JI0DJXb3TZgmr7';

export default axios.create({
    baseURL: 'https://coloradobeermap.com/wp-json/wp/v2/brewery',
    params: {
        key: KEY
    }
});