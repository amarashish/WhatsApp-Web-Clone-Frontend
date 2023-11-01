import axios from "axios";
import { BASE_URL } from "../Constants/constants.js";

export const addUser = async (data)=>{
    try{
        return await axios.post(`${BASE_URL}/add`, data);
    }catch(error){
        console.log("Error while calling addUser API", error.message);
    }
};

export const addVerifier = async (data)=>{
    try{
        const response = await axios.post(`${BASE_URL}/addVerifier`, data);
        console.log(response.data);///////

    }catch(error){
        console.log("Error while calling addVerifier API", error.message);
    }
}

export const getVerifier = async (data) => {
    try{
        const response = await axios.post(`${BASE_URL}/getVerifier`, data);
        console.log(response.data);///////
        return response.data;
    }catch(error){
        console.log("Error while calling getVerifier API", error.message);

    }
}

export const updateUser = async (data)=>{
    try{
        await axios.put(`${BASE_URL}/update`, data);
    }catch(error){
        console.log("Error while calling updateUser API", error.message);
    }
}

export const getUsers = async ()=>{
    try{
        const response = await axios.get(`${BASE_URL}/users`);
        return response.data;
    }catch(error){
        console.log("Error while calling getUser API", error.message);
    }
}

export const setConversation = async (data)=>{
    try{
        await axios.post(`${BASE_URL}/conversation/add`, data);
    }catch(error){
        console.log("Error while calling setConversation api", error.message);
    }
}
export const getConversation = async (data)=>{
    try{
        const response = await axios.post(`${BASE_URL}/conversation/get`, data);
        return response.data;
    }catch(error){
        console.log("Error while calling getConversation api", error.message);
    }
};

export const getAllConversation = async (id)=>{
    try{
        const response = await axios.get(`${BASE_URL}/conversations/getAll/${id}`);
        return response.data;
    }catch(error){
        console.log("Error while calling getAllConversation api", error.message);

    }
}

export const newMessage = async (data) =>{
    try{
        await axios.post(`${BASE_URL}/message/add`, data);
    }catch(error){
        console.log("Error While calling newMessage API", error.message);
    }
};

export const getAllMessages = async (id)=>{
    try{
        const response = await axios.get(`${BASE_URL}/messages/getAll/${id}`);
        return response.data;
        
    }catch(error){
        console.log("Error While calling getMessages API", error.message);
    }
};

export const uploadFile = async (data)=>{
    try{
        return await axios.post(`${BASE_URL}/file/upload`, data);
    }catch(error){
        console.log("Error While calling uploadFile API", error.message);
    }
}
export const updateProfile = async (data)=>{
    try{
        const {sub, picture} = data;
        return await axios.post(`${BASE_URL}/updateProfile/${sub}`, picture);
    }catch(error){
        console.log("Error While calling updteProfile API", error.message);
    }
}
