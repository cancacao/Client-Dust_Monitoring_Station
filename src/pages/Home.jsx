import Grid from '@material-ui/core/Grid';
import './pages_css/grid.css';
import './pages_css/home.css';
import MySidebar from '../components/mySidebar/MySidebar';
import Card from '../components/card/Card';
import LineChart from '../components/chart/Line_chart';
import React, {useState, useEffect} from 'react';
import socket from '../service/Socket';

export default function Home(props) {
  const [display_data, setDisplay_data] = useState([101,202,303,404]);
  const [list_chart_data, setList_chart_data] = useState([]);
  const [chart_time_data, setChart_time_data] = useState([]);
  useEffect(() => {
    socket.on('server_to_client', (data) => {
      setDisplay_data([data.pm, data.pressure, data.temp, data.flow])
      setList_chart_data(data.list_chart_data)
      setChart_time_data(data.chart_time)
      
    })
  },[])
  return (
    <div>
      <Grid className="grid__root">
          <Grid item className='grid_one' >
             <MySidebar page='/home' mqttState={props.mqttState}/>
          </Grid>
          <Grid container  direction='column' className='grid_two'>
                    <Grid item className='sub_grid_one'>
                      <div className="card_container">
                        <div className="card_pm">
                            <Card card_title="PM" card_unit="mg/Nm3" card_value = {display_data[0]} />
                          </div>                      
                          <div className="card_press">
                            <Card card_title="Pressure" card_unit="mBar" card_value = {display_data[1]} />
                          </div>
                          <div className="card_temp">
                            <Card card_title="Temparature" card_unit="oC" card_value = {display_data[2]} />
                          </div>
                          <div className="card_flow">
                            <Card card_title="Flow" card_unit="m3/min" card_value = {display_data[3]} />
                          </div>
                      </div>                      
                    </Grid>
                    <Grid item className='sub_grid_two'>
                        <div className="home_chart">
                            <LineChart chart_data = {list_chart_data} chart_time = {chart_time_data} />
                        </div> 
                    </Grid>
            </Grid>   
      </Grid>
    </div>
  );
}
