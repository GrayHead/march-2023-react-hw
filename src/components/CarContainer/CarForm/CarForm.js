import {useForm} from "react-hook-form";
import {carService} from "../../../services/carService";
import {useContext, useState} from "react";
import {Context} from "../CarContainer";

const CarForm = () => {
    const [errors, setErrors] = useState(null);
    const {reset, register, handleSubmit, setValue} = useForm();
    const {setTrigger, carForUpdate, setCarForUpdate} = useContext(Context);

    if (carForUpdate) {
        setValue('brand', carForUpdate.brand)
        setValue('price', carForUpdate.price)
        setValue('year', carForUpdate.year)
    }
    const save = async (car) => {
        try {
            await carService.create(car);
            setErrors(null)
            reset()
            setTrigger()

        } catch (e) {
            setErrors(e.response.data)
        }

    }
    const update = async (car) => {
        try {
            await carService.updateById(carForUpdate.id, car)
            reset()
            setErrors(null)
            setTrigger()
            setCarForUpdate(null)
        } catch (e) {
            setErrors(e.response.data)
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit(!carForUpdate ? save : update)}>
                <label>brand: <input type="text" placeholder={'brand'} {...register('brand')}/></label>
                <label>price: <input type="text" placeholder={'price'} {...register('price')}/></label>
                <label>year: <input type="text" placeholder={'year'} {...register('year')}/></label>
                <button>{!carForUpdate?'save':'update'}</button>
            </form>
            {errors && <h1>{JSON.stringify(errors)}</h1>}
        </div>
    );
};

export {CarForm};
