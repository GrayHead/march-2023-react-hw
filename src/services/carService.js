import {apiService} from "./apiService";
import {urls} from "../contants";

const carService = {
    getAll: () => apiService.get(urls.cars.base),
    create: (data) => apiService.post(urls.cars.base, data),
    updateById: (id, data) => apiService.put(urls.cars.byId(id), data),
    deleteById: (id) => apiService.delete(urls.cars.byId(id))
}

export {
    carService
}
