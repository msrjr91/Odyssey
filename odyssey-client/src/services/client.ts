import axios, {AxiosInstance} from 'axios';

const amadeus: AxiosInstance = axios.create({
    baseURL: 'https://test.api.amadeus.com/v1',
    headers: {
      Authorization: `Bearer ${process.env.API_SECRET}`,
    },
});