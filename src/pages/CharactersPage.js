import {Characters} from "../components";
import {useTitle} from "../hooks/useTitle";

const CharactersPage = () => {
    useTitle('CharactersPage')
    return (
        <div>
            <Characters/>
        </div>
    );
};

export {CharactersPage};
