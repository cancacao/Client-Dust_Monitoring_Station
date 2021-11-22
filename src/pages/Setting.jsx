import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import './pages_css/grid.css';
import './pages_css/setting.css';
import TextField from '@material-ui/core/TextField';
import MySidebar from '../components/mySidebar/MySidebar';
import socket from '../service/Socket';

export default function Setting(props) {
    const [urlBorker, setUrl_broker] = useState('broker.hivemq.com');
    const [port, setPort] = useState(1883);
    const [topic, setTopic] = useState('sys_get_data');
    const handleBroker = (e) => {
            setUrl_broker(e.target.value)
    }
    const handlePort = (e) => {
        setPort(e.target.value)
    }
    const handleTopic = (e) => {
        setTopic(e.target.value)
    }
    const handleClick_sub = () => {
        socket.emit('mqttTopic',topic)
    }
    const handleClick_con = () => {
        socket.emit('mqttConnection',`{"broker":"${urlBorker}","port":"${port}","state":"true"}`)
    }
    const handleClick_dis = () => {
        socket.emit('mqttConnection','false')
    }
    
    return (
        <div>
            <Grid className="grid__root" >
                <Grid item className='grid_one' >
                    <MySidebar page='/setting' mqttState = {props.mqttState} />
                </Grid>
                <Grid container className='grid_two'>  
                    <Grid className='grid_two_sub'>
                    <div className="title">
                        <p>Communication Setting </p>
                    </div>     
                    <div className="form">
                        <div className="line_one">
                            <TextField
                                label="BROKER"
                                className="broker"
                                defaultValue="broker.hivemq.com"
                                margin="normal"
                                variant="outlined"
                                onChange = {handleBroker}
                            />
                            <TextField
                                label="TOPIC"
                                className="topic"
                                defaultValue="sys_get_data"
                                margin="normal"
                                variant="outlined"
                                onChange = {handleTopic}
                            />
                        </div>
                        <div className="line_two">
                            <TextField
                                label="PORT"
                                className="port"                              
                                defaultValue="1883"
                                margin="normal"
                                variant="outlined"
                                onChange = {handlePort}
                            />
                            <button className="btn_sub" onClick={handleClick_sub}>
                                    Subscribe
                            </button>
                        </div>
                        <div className="line_three">
                            <p className="status_connect">{props.mqttState === 'true'? "Connected":"Waiting for connecting"}</p>
                            <button className="btn_con" onClick={handleClick_con}>
                                    Connect
                            </button>
                            <button  className="btn_dis" onClick={handleClick_dis}>
                                    Disconnect
                            </button>
                        </div>
                    </div>       
                    </Grid>                    
                </Grid>
            </Grid>
        </div>
    )
}
