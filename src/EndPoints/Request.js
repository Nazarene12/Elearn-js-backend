import axios from 'axios'
import { ip } from './IP'
import  * as url from './EndPoint';

export const loginRequest = async (values)=> {
    const response = await axios.post(`${ip}${url.login_url}`, values);
    return response.data;
}

export const registerRequest = async (values)=> {
    const response = await axios.post(`${ip}${url.register_url}`, values);
    return response.data;
}

export const verifyRequest = async (id) => {
    const response = await axios.post(`${ip}${url.verify_url}?id=${id}`);
    return response.data;
}

export const forgotRequest = async (values)=> {
    const response = await axios.post(`${ip}${url.forgot_url}`, values);
    return response.data;
}

export const resetRequest = async ([values, id])=> {
    const response = await axios.post(`${ip}${url.reset_url}?id=${id}`, values);
    return response.data;
}

export const category_list = async (accessToken) => {
    try {
        const response = await axios.get(`${ip}${url.category_list_url}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });
        return response.data;
    } catch (error) {
        throw error; // Rethrow the error for the caller to handle
    }
};

export const verify_token = async (access_token) =>{
    const response = await axios.post(`${ip}${url.verify_token_url}`);
    return response.data;
}

export const refresh_token = async (refresh_token) =>{
    const response = await axios.post(`${ip}${url.refresh_token_url}`);
    return response.data;
}