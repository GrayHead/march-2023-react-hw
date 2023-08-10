import {CarForm} from "./CarForm/CarForm";
import {Cars} from "./Cars/Cars";

const CarsContainer = () => {
    return (
        <div>
            <CarForm/>
            <hr/>
            <Cars/>
        </div>
    );
};

export {CarsContainer};
