import axios from 'axios';

const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvY29sb3JhZG9iZWVybWFwLmNvbSIsImlhdCI6MTU3OTAzNTMwMywibmJmIjoxNTc5MDM1MzAzLCJleHAiOjE1Nzk2NDAxMDMsImRhdGEiOnsidXNlciI6eyJpZCI6IjEifX19.3fFQvT1CoQG6RaVumYF9I9yOyVJVl-rQYHrmZzdhNIc';
const endpoint = 'https://coloradobeermap.com/wp-json/wp/v2/brewery';

export default axios.create({
    baseURL: endpoint,
    params: {
        key: KEY
    }
});