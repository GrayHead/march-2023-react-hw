// import {forwardRef} from "react";
// import {IMaskInput} from "react-imask";
// import {useForm} from "react-hook-form";
//
// const MaskTextField = forwardRef(
//     (props, inputRef)=>{
//         const {onChange, mask, ...other} = props;
//
//         return(
//             <IMaskInput
//                 mask={mask}
//                 inputRef={inputRef}
//                 onChange={(e)=>{
//                     onChange({target:{name:other.name, e}})
//                 }}
//                 {...other}
//
//             />
//         )
//     }
// )
// const App = () => {
//     const {register, handleSubmit} = useForm();
//
//     const save = (obj) => {
//         console.log(obj);
//     }
//     return (
//         <form onSubmit={handleSubmit(save)}>
//             <MaskTextField mask="+38(000) 000-0000" {...register('phone')}/>
//             <button>save</button>
//         </form>
//     );
// };
//
// export {App};
//
import {Button, Dialog, DialogActions, DialogContent, DialogTitle} from "@mui/material";
import {useState} from "react";

const MyDialog = ({open, setOpen}) => {
    return (
        <Dialog open={open} onClose={()=>setOpen(false)}>
            <DialogTitle>Login</DialogTitle>
            <DialogContent>
                <h1>Some Form</h1>
            </DialogContent>
            {/*<DialogActions>*/}
            {/*    <Button variant={'contained'} onClick={()=>setOpen(false)}>Close</Button>*/}
            {/*</DialogActions>*/}
        </Dialog>
    )
}

const App = () => {
    const [open, setOpen] = useState(false)
    return (
        <div>
            <Button variant={open ? 'outlined' : 'contained'} onClick={() => setOpen(true)}>Open Dialog</Button>
            <MyDialog open={open} setOpen={setOpen}/>
        </div>
    );
};

export {App};
