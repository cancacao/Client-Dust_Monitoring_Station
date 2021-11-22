import React from 'react';
import Grid from '@material-ui/core/Grid';
import './pages_css/grid.css';
import './pages_css/contact.css';
import MySidebar from '../components/mySidebar/MySidebar';


export default function Contact(props) {
    return (
        <div>
            <Grid className="grid__root" >
                <Grid item className='grid_one' >
                    <MySidebar page='/contact' mqttState = {props.mqttState} />
                </Grid>
                <Grid container className='grid_two'> 
                    <div className="contact">
                        <img src="../img/logo.png" alt="logo"  /> 
                        <div className="detail">
                            <p className='odd'>Nguyen Van Can</p>    
                            <p className='even'>Facalty of Electrical and Electronics</p>
                            <p className='even'>Engineering</p>
                            <p className='odd'>Ton Duc Thang University</p>
                            <p className='even'>19 Nguyen Huu Tho, District 7, Ho Chi </p>
                            <p className='even'>Minh City, Viet Nam</p>
                            <p className='odd'>Phone: 0937 465 364</p>
                            <p className='even'>Email: 41703043@student.tdtu.edu.vn</p>
                        </div>         
                    </div>                
                </Grid>
            </Grid>
        </div>
    )
}
