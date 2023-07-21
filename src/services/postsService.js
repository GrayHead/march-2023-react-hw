import {apiService} from "./apiService";
import {urls} from "../constants";

const postsService = {
    getById: (id) => apiService.get(urls.posts.byId(id))
}

export {
    postsService
}
