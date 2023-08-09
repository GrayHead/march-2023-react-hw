import {useNavigate} from "react-router-dom";

import {Characters} from "../../components";

const CharactersPage = () => {
    const navigate = useNavigate();
    return (
        <div>
            <button onClick={() => navigate(-1)}>Back</button>
            <Characters/>
        </div>
    );
};

export {CharactersPage};
