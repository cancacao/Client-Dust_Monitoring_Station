import React from 'react'
import { Line } from "react-chartjs-2";

export default function LineChart(props) {
    return (
        <div className="line_chart">
            <Line
                data={{
                labels: props.chart_time,
                datasets: [
                    {
                    data: props.chart_data[0],
                    label: "PM",
                    borderColor: "#3e95cd",
                    fill: false
                    },
                    {
                    data: props.chart_data[1],
                    label: "Press",
                    borderColor: "#8e5ea2",
                    fill: false
                    },
                    {
                    data: props.chart_data[2],
                    label: "Temp",
                    borderColor: "#3cba9f",
                    fill: false
                    },
                    {
                    data: props.chart_data[3],
                    label: "Flow",
                    borderColor: "#e8c3b9",
                    fill: false
                    },
                ]
                }}
                options={{
                scrollX: true,
                
                legend: {
                    display: false,
                    position: "top"
                }
                }}
            />
        </div>
    )
}
