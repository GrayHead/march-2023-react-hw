import {jsonApiService} from "./jsonApiService";
import {urls} from "../constants/urls";

class PostService {
    getAll() {
        return jsonApiService.get(urls.json.posts)
    }
}

export const postService = new PostService();
