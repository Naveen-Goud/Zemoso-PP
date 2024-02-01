import React from "react";
import API from "./API";


export const getUserDetails = async (id : number)=>{
    const result = await API.get(`/${id}`);
    return result.data;
}

export const getUserComments = async (id : number)=>{
    const result = await API.get(`/${id}/comments`)
    return result ;
}