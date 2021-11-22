import React from 'react';
import './MySidebar.css';
import {myDataSidebar} from './myDataSidebar';
import { Link } from 'react-router-dom';

export default function MySidebar(props) {
    
    return (
        <div className='sidebar'>
            <ul className='sidebarList'>
                {myDataSidebar.map((val, key) => {
                    return (
                        <li
                            className='row'
                            key={key}
                        >
                            <Link to={val.link} className='link'>
                                <div id='icon' 
                                    className={props.page===val.title?'present':''}
                                > {val.icon} </div>
                                
                            </Link>
                        </li>
                    );
                })}
            </ul>
            <div className={(props.mqttState === "true")?"mqttOn":"mqttOff"}>
                  
            </div>
        </div>
    )
}
