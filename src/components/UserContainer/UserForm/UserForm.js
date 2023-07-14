import {useForm} from "react-hook-form";
import {useRef} from "react";
import {upload} from "@testing-library/user-event/dist/upload";

const UserForm = ({setUsers}) => {
    const {register, reset, handleSubmit} = useForm();
    const inpt = useRef();
    const save = (user) => {
        fetch('https://jsonplaceholder.typicode.com/users', {
            headers: {'Content-type': 'application/json'},
            method: 'POST',
            body: JSON.stringify(user)
        }).then(value => value.json()).then(value => {
            setUsers(prev => [...prev, value])
            reset()
        })
    }

    const uploadPhoto = () => {
        inpt.current.click()
    };

    return (
        <div>
            <form onSubmit={handleSubmit(save)}>
                <label>name: <input type="text" placeholder={'name'} {...register('name')}/></label>
                <label>username: <input type="text" placeholder={'username'} {...register('username')}/></label>
                <label>email: <input type="text" placeholder={'email'} {...register('email')}/></label>
                <label>city: <input type="text" placeholder={'city'} {...register('address.city')}/></label>
                <input type="submit" value={'save'}/>
            </form>
            <input type="file" ref={inpt} style={{display:"none"}}/>
            <button onClick={uploadPhoto}>uploadPhoto</button>
        </div>
    );
};

export {UserForm};
