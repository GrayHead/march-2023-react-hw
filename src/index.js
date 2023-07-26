import ReactDOM from 'react-dom/client';
import {RouterProvider} from "react-router-dom";
import {router} from "./router";
import {AuthContextProvider} from "./hoc/AuthContextProvider";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AuthContextProvider>
        <RouterProvider router={router}/>
    </AuthContextProvider>
);

