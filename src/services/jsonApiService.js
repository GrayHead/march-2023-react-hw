import axios from "axios";

import {jsonBaseUrl} from "../constants/urls";

const jsonApiService = axios.create({baseURL: jsonBaseUrl});

export {
    jsonApiService
}
