import axios from "axios";

const Ax = axios.create({
    // baseURL: "http://192.168.7.101:3001"
    baseURL: "http://127.0.0.1:3003"
})

export default Ax;