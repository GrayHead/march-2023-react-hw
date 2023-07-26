import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout";
import {InfoPage} from "./pages/InfoPage";
import {AuthLayout} from "./layouts/AuthLayout";
import {UserPage} from "./pages/UserPage";
import {AdminLayout} from "./layouts/AdminLayout";
import {AdminPage} from "./pages/AdminPage";
import {AuthRequired} from "./hoc/AuthRequired";
import {LoginPage} from "./pages/LoginPage";
import {AdminRequired} from "./hoc/AdminRequired";

const router = createBrowserRouter([
    {
        path: '',
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element: <Navigate to={'info'}/>
            },
            {
                path: 'info',
                element: <InfoPage/>
            },
            {
                path:'login',
                element:<LoginPage/>
            },
            {
                element: <AuthRequired><AuthLayout/></AuthRequired>,
                children: [
                    {
                        path: 'users',
                        element: <UserPage/>

                    }
                ]
            },
            {
                element: <AdminRequired><AdminLayout/></AdminRequired>,
                children:[
                    {
                        path: 'admin',
                        element: <AdminPage/>
                    }
                ]
            }
        ]
    }
]);


export {
    router
}
