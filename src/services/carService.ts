import {apiService, IRes} from "./apiService";
import {ICar} from "../interfaces";
import {urls} from "../constants";
import {IPagination} from "../interfaces/paginationInterface";

const carService = {
    getAll: (page: number, size: number): IRes<IPagination<ICar>> => apiService.get(urls.cars.base, {
        params: {
            page,
            page_size:size
        }
    }),
    create: (data: ICar): IRes<ICar> => apiService.post(urls.cars.base, data),
    getById: (id: number): IRes<ICar> => apiService.get(urls.cars.byId(id)),
    updateById: (id: number, data: ICar) => apiService.put<ICar>(urls.cars.byId(id), data),
    deleteById: (id: number): IRes<void> => apiService.delete(urls.cars.byId(id)),
    addPhoto:(id:number, data:FormData):IRes<ICar> => apiService.put(urls.cars.photo(id), data)
}

export {
    carService
}