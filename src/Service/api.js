import axios from "axios";
// import dotenv from "dotenv";

// dotenv.config();

// const url = process.env.BASE_URL;

const BASE_URL = "http://localhost:8000"

// const BASE_URL = "https://whatsapp-web-clone-7gg7.onrender.com"; 


export const addUser = async (data)=>{
    try{
        return await axios.post(`${BASE_URL}/add`, data);

    }catch(error){
        console.log("Error while calling addUser API");
    }
};

export const updateUser = async (data)=>{
    try{
        await axios.put(`${BASE_URL}/update`, data);
    }catch(err){
        console.log("Error while calling updateUser API");
    }
}

export const getUsers = async ()=>{
    try{
        const response = await axios.get(`${BASE_URL}/users`);
        return response.data;
    }catch(err){
        console.log("Error while calling getUser API");
    }
}

export const setConversation = async (data)=>{
    try{
        await axios.post(`${BASE_URL}/conversation/add`, data);
    }catch(err){
        console.log("Error while calling setConversation api", err.message);
    }
}
export const getConversation = async (data)=>{
    try{
        const response = await axios.post(`${BASE_URL}/conversation/get`, data);
        return response.data;
    }catch(err){
        console.log("Error while calling getConversation api", err.message);
    }
};

export const getAllConversation = async (id)=>{
    try{
        const response = await axios.get(`${BASE_URL}/conversations/getAll/${id}`);
        return response.data;
    }catch(err){
        console.log("Error while calling getAllConversation api", err.message);

    }
}

export const newMessage = async (data) =>{
    try{
        await axios.post(`${BASE_URL}/message/add`, data);
    }catch(err){
        console.log("Error While calling newMessage API", err.message);
    }
};

export const getAllMessages = async (id)=>{
    try{
        const response = await axios.get(`${BASE_URL}/messages/getAll/${id}`);
        return response.data;
    }catch(err){
        
        console.log("Error While calling getMessages API", err.message);
    }
};

export const uploadFile = async (data)=>{
    try{
        return await axios.post(`${BASE_URL}/file/upload`, data);
    }catch(err){
        console.log("Error While calling uploadFile API", err.message);
    }
}
export const updateProfile = async (data)=>{
    try{
        const {sub, image} = data
        return await axios.post(`${BASE_URL}/upload/${sub}`, image);
    }catch(err){
        console.log("Error While calling uploadProfile API", err.message);
    }
}
