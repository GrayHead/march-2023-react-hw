import {useParams} from "react-router-dom";

const Other = () => {
    const params = useParams();
    console.log(params);
    return (
        <div>
            Other
        </div>
    );
};

export {Other};
