import {useEffect, useState} from "react";
import {Car} from "../Car/Car";

const Cars = ({onSave}) => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetch('http://owu.linkpc.net/carsAPI/v1/cars').then(value => value.json()).then(value => setCars(value))
    }, [onSave])
    return (
        <div>
            {cars.map(car=><Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};
