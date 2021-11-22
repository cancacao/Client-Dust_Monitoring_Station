import React from 'react';
import Grid from '@material-ui/core/Grid';
import './pages_css/grid.css';
import './pages_css/help.css';
import MySidebar from '../components/mySidebar/MySidebar';

export default function Help(props) {
    return (
        <div>
            <Grid className="grid__root" >
                <Grid item className='grid_one' >
                    <MySidebar page='/help' mqttState = {props.mqttState}/>
                </Grid>
                <Grid container className='grid_two'>        
                    <div className="help">
                        <a href="https://www.google.com/">
                            Click to download The User's Manual
                        </a>
                    </div>                         
                </Grid>
            </Grid>
        </div>
    )
}
