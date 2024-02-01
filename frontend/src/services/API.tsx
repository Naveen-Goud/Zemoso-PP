import axios from "axios";
import React from "react";


const API= axios.create({
    baseURL: process.env.BASE_URL,
});

export default API;