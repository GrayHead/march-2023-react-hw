import {createBrowserRouter, Outlet} from "react-router-dom";
import {Info} from "./components/Info";
import {Other} from "./components/Other";
import {MainLayout} from "./layouts/MainLayout";

const router = createBrowserRouter([
    {
        path:'',
        element:<MainLayout/>,
        children:[
            {
                path: '',
                element: <Info/>
            },
            {
                path: 'others/:idOther/:id',
                element: <Other/>
            }

        ]
    }
]);

export {
    router
}
