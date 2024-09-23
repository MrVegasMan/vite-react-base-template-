import {useRoutes} from 'react-router-dom'


import Home from '@/views/Home'
import Iq from "@/views/Iq";
import Offerwall from "@views/Offerwall";
import Boosters from "@views/Boosters";
import Friends from "@views/Friends";
import Tapalka from "@views/Tapalka";

export default function Router() {
    return useRoutes([
        {
            path: '/',
            element: <Home/>,
        },
        {
            path: '/iq',
            element: <Iq/>,
        },
        {
            path: '/offerwall',
            element: <Offerwall/>,
        },
        {
            path: '/Tapalka',
            element: <Tapalka/>,
        },
        {
            path: '/boosters',
            element: <Boosters/>,
        },
        {
            path: '/friends',
            element: <Friends/>,
        },
    ])
}
