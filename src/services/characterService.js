import {apiService} from "./apiService";
import {urls} from "../constants";

const characterService = {
    getByIds: (iDs) => apiService.get(urls.characters.byIds(iDs))
}

export {
    characterService
}
