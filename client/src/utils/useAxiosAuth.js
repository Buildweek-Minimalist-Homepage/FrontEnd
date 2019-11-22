import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: 'https://minimalist-homepage.herokuapp.com/api',
        headers: {
            Authorization: token,
        },
    });
};