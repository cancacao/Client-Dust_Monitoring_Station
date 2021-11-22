import React from 'react';
import {HiHome} from 'react-icons/hi';
import {BiLineChart, BiHelpCircle} from 'react-icons/bi';
import {MdStorage, MdSettings, MdPermContactCalendar} from 'react-icons/md';


export const myDataSidebar = [
    {
        title: '/home',
        icon: <HiHome/>,
        link: '/home',
    },
    {
        title: '/data_chart',
        icon: <BiLineChart/>,
        link: '/data_chart',
    },
    {
        title: '/data_query',
        icon: <MdStorage/>,
        link: '/data_query',
    },
    {
        title: '/setting',
        icon: <MdSettings/>,
        link: '/setting',
    },
    {
        title: '/help',
        icon: <BiHelpCircle/>,
        link: '/help',
    },
    {
        title: '/contact',
        icon: <MdPermContactCalendar/>,
        link: '/contact',
    },
]

