import {Cars} from "../components/Cars";
import {CarForm} from "../components/CarForm";
import {useEffect, useState} from "react";
import {ICar} from "../interfaces";
import {carService} from "../services";
import {Outlet} from "react-router-dom";
import {Pagination} from "../components/Pagination";

const CarsPage = () => {

    return (
        <div>
            <Outlet/>
            <CarForm />
            <Cars/>
            <Pagination/>
        </div>
    );
};

export {CarsPage};