import {apiService} from "./apiService";
import {urls} from "../constants";

const todosService = {
    getAll: () => apiService.get(urls.todos)
}

export {
    todosService
}
