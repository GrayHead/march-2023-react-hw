import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const carService = {
    getAll:()=>apiService.get(urls.cars.base)
}
