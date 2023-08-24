import {Dispatch, FC, PropsWithChildren, SetStateAction, useEffect, useState} from "react";
import {ICar} from "../interfaces";
import {carService} from "../services";
import {Car} from "./Car";
import {useAppDispatch, useAppSelector} from "../hooks/reduxHooks";
import {carActions} from "../redux/slices/carsSlice";
import {useSearchParams} from "react-router-dom";

interface IProps extends PropsWithChildren {
}

const Cars: FC<IProps> = () => {
    const dispatch = useAppDispatch();
    const {cars} = useAppSelector(state => state.cars);
    const [query, setQuery] = useSearchParams({page: '1', size: '10'});


    useEffect(() => {
        dispatch(carActions.getAll({page: +query.get('page'), size: +query.get('size')}))
    }, [query.get('page'), query.get('size')])


    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};