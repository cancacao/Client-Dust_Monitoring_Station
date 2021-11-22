import React, {useState} from 'react';
import {  CSVLink  } from 'react-csv'
import axios from "axios";
import Grid from '@material-ui/core/Grid';
import './pages_css/grid.css';
import './pages_css/data_query.css';
import MySidebar from '../components/mySidebar/MySidebar';
import MyDateTimePicker from '../components/datePicker/MyDateTimePicker';
import Table from '../components/table/Table';




export default function DataQuery(props) {
    const [dateFrom, setDate_from] = useState(0);
    const [dateTo, setDate_To] = useState(0);
    const [list_table_data, setList_table_data] = useState([])
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
            let tmp_data = res.data;
            let avg_pm = 0;
            let avg_pressure = 0;
            let avg_temp = 0;
            let avg_flow = 0;
            tmp_data.map(obj => {
                avg_pm = avg_pm + Number(obj.pm);
                avg_pressure = avg_pressure + Number(obj.pressure);
                avg_temp = avg_temp + Number(obj.temp);
                avg_flow = avg_flow + Number(obj.flow);
                delete obj._id;
                delete obj.__v;
                return obj.time = new Date(obj.time).toLocaleString()  
            })
            avg_pm = avg_pm/(res.data.length);
            avg_pressure = avg_pressure/(res.data.length);
            avg_temp = avg_temp/(res.data.length);
            avg_flow = avg_flow/(res.data.length);
            setList_table_data([...tmp_data,
             {  time:'Avg value',
                pm: (avg_pm.toFixed(2)).toString(),
                pressure: (avg_pressure.toFixed(2)).toString(),
                temp: (avg_temp.toFixed(2)).toString(),
                flow: (avg_flow.toFixed(2)).toString(),
            }])    
          });
    }
    var tmp_date = new Date()
    var name_file = "Dust_data_" + tmp_date.toLocaleString();
    return (
        <div>
      <Grid className="grid__root">
          <Grid item className='grid_one' >
             <MySidebar page='/data_query' mqttState = {props.mqttState} />
          </Grid>
          <Grid container  direction='column' className='grid_two'>
                    <Grid item className='sub_grid_one'>
                        <div className="query_title">
                            <p className="query_title_text">Query</p>
                        </div>
                        <div className="query_date">
                            <div className="date_from">
                                <MyDateTimePicker label="From" onChange = {handleChangeFrom} />
                            </div>
                            <div className="date_to">
                                <MyDateTimePicker label="To" onChange = {handleChangeTo} />
                            </div>
                            <button className="btn_query" onClick = {handleClick} >
                                    Query
                            </button>
                            <button className="btn_export" value = "Export">
                                <CSVLink data={list_table_data} filename={name_file}  >
                                    <p className="export_text">Export</p>
                                </CSVLink>
                            </button>
                        </div>
                    </Grid>
                    <Grid item className='sub_grid_two'>
                        <div className='query_table' style={{ width: "100%" }}>
                            {
                                list_table_data && <Table data_table = {list_table_data} />
                            }
                            
                        </div>
                    </Grid>
            </Grid>   
      </Grid>
    </div>
    )
}
