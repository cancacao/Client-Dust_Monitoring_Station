import React from 'react'
import './card.css'

export default function Card(props) {
    return (
        <div className="card">
            <span className="card_title">
                {props.card_title}
            </span>
            <span className="card_value">
                {props.card_value}
            </span>
            <span className="card_unit">
                {props.card_unit}
            </span>
        </div>
    )
}
