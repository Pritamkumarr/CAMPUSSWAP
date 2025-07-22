// src/api/axios.js

import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000/api", // ✅ Your backend API base path
  headers: {
    "Content-Type": "application/json"
  },
  withCredentials: false // Set to true only if you use cookies/sessions
});

export default instance;
