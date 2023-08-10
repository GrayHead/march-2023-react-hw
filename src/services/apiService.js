import axios from "axios";

import {baseURL} from "../contants";

const apiService = axios.create({baseURL});

export {
    apiService
}
