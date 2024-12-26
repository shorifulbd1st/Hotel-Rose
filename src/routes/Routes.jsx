import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import SignIn from "../pages/Authentication/SignIn";
import Register from "../pages/Authentication/Register";
import Rooms from "../pages/Rooms";
import MyBooking from "../pages/MyBooking";
import RoomDetails from "../pages/RoomDetails";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/signin',
                element: <SignIn></SignIn>
            },
            {
                path: '/registration',
                element: <Register></Register>
            },
            {
                path: '/rooms',
                element: <Rooms></Rooms>,
                loader: () => fetch(`${import.meta.env.VITE_API_URL}/all-rooms`)
            },
            {
                path: '/room-details/:id',
                element: <PrivateRoute><RoomDetails></RoomDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/room/${params.id}`)
            },
            {
                path: "/my-booking",
                element: <PrivateRoute> <MyBooking></MyBooking> </PrivateRoute>
            }
        ]
    }
])
export default router;