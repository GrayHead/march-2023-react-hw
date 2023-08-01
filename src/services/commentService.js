import {jsonApiService} from "./jsonApiService";
import {urls} from "../constants/urls";

class CommentService {
    getAll() {
        return jsonApiService.get(urls.json.comments)
    }
}

export const commentService = new CommentService();
