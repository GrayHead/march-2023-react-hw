import {Dispatch, FC, PropsWithChildren, SetStateAction, useRef, useState} from "react";
import {ICar} from "../interfaces";
import {carService} from "../services";
import {useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../hooks/reduxHooks";
import {carActions} from "../redux/slices/carsSlice";
import empty from "../assets/images/empty.jpg";


interface IProps extends PropsWithChildren {
    car: ICar,
}

const Car: FC<IProps> = ({car}) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const fileInput = useRef<HTMLInputElement>();
    const [image, setImage] = useState<string>(null)
    const {id, brand, photo} = car;

    const deleteCar = async () => {
        await dispatch(carActions.deleteCar({id}))
    };

    const addPhoto = async () => {
        const formData = new FormData();
        const file: Blob = fileInput.current.files[0];
        formData.append('photo', file)
        await carService.addPhoto(id, formData)
        setImage(URL.createObjectURL(file))
    };

    return (
        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <img
                src={ image ||photo|| empty}
                alt={brand}
                // style={{cursor: photo || image ? 'default' : 'pointer', width: '250px'}}
                style={{cursor:  'pointer', width: '250px'}}
                onClick={() => fileInput.current.click()}
            />
            <button onClick={() => dispatch(carActions.setCarForUpdate({car}))}>update</button>
            <button onClick={deleteCar}>delete</button>
            <button onClick={() => navigate(id.toString(), {state: car})}>details</button>
            <input
                type="file"
                accept={'image/jpeg, image/png'}
                style={{display: 'none'}}
                // disabled={!!photo || !!image}
                onChange={addPhoto}
                ref={fileInput}
            />
        </div>
    );
};

export {Car};