import {useContext} from "react";
import {Context} from "../CarContainer";
import {carService} from "../../../services/carService";

const Car = ({car}) => {
    const {setCarForUpdate, setTrigger} = useContext(Context);
    const {id, brand, price, year} = car;
    const deleteCar = async () => {
      try {
          await carService.deleteById(id)
      }catch (e) {
          console.log(e.response.data);
      }finally {
          setTrigger()
      }
    }
    return (
        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={()=>setCarForUpdate(car)}>update</button>
            <button onClick={deleteCar}>delete</button>
        </div>
    );
};

export {Car};
