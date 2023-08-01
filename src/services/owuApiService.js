import axios from "axios";

import {owuBaseURl} from "../constants/urls";

const owuApiService = axios.create({baseURL: owuBaseURl});

export {
    owuApiService
}
