import React, {useState} from 'react';
import axios from "axios";
import Grid from '@material-ui/core/Grid';
import './pages_css/grid.css';
import './pages_css/data_chart.css';
import MySidebar from '../components/mySidebar/MySidebar';
import MyDateTimePicker from '../components/datePicker/MyDateTimePicker';
import LineChart from '../components/chart/Line_chart';


export default function DataChart(props) {
    
    const [dateFrom, setDate_from] = useState(0);
    const [dateTo, setDate_To] = useState(0);
    const [list_chart_data, setList_chart_data] = useState([])
    const [chart_time_data, setChart_time_data] = useState([])
    function handleChangeFrom(value){
        setDate_from(value);
    }
    function handleChangeTo(value){
        setDate_To(value);
    }
    
    const handleClick = () => {
        axios.get("http://localhost:4000/apiData", {
            params: {
                from: dateFrom,
                to: dateTo
            }
        }).then((res) => {
            setList_chart_data([
                res.data.map(obj => obj.pm),
                res.data.map(obj => obj.pressure),
                res.data.map(obj => obj.temp),
                res.data.map(obj => obj.flow),
            ])
            setChart_time_data(
                res.data.map(obj => obj = new Date(obj.time).toLocaleString())
            )
          });
    }

    
    return (
        <div>
      <Grid className="grid__root" >
          <Grid item className='grid_one' >
             <MySidebar page='/data_chart' mqttState = {props.mqttState} />
          </Grid>
          <Grid container  direction='column' className='grid_two'>
                    <Grid item className='sub_grid_one'>
                        <div className="chart_title">
                            <p className="chart_title_text">Chart</p>
                        </div>
                        
                        <div className="chart_date">
                            <div className="date_from">
                                <MyDateTimePicker label="From" onChange = {handleChangeFrom} />
                            </div>
                            <div className="date_to">
                                <MyDateTimePicker label="To" onChange = {handleChangeTo} />
                            </div>
                            <button className="btn_enter" onClick = {handleClick} >
                                    Enter
                            </button>
                        </div>
                    </Grid>
                    <Grid item className='sub_grid_two'>
                    <div className="chart_chart">
                            <LineChart chart_data = {list_chart_data} chart_time = {chart_time_data}/>
                        </div>
                    </Grid>
            </Grid>   
      </Grid>
    </div>
    )
}
