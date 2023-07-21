import {apiService} from "./apiService";
import {urls} from "../constants";

const albumsService = {
    getAll: () => apiService.get(urls.albums)
}

export {
    albumsService
}
