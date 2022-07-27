import React, { useState, useEffect } from 'react'

const timediff = require('timediff')

export default function Time(){

    const [year, setYear] = useState(0)
    const [month, setMonth] = useState(0)
    const [day, setDay] = useState(0)
    const [week, setWeek] = useState(0)

    function getDiff(){
        let timeNow = new Date()
        let diff = timediff('2003-07-28', timeNow)
        return diff 
    }

    useEffect(()=>{
        let date = getDiff()
            
        setYear(date.years)
        setMonth(date.months)
        setDay(date.days)
        setWeek(date.weeks)
    },[])

    return(
        <div className="divider time">
            <span className="divider-text">It's Been</span>
            <div className="time-container">
                <div className="time-item">
                    <span className="number">{year}</span>
                    <span className="label">Years</span>
                </div>
                <div className="time-item">
                    <span className="number">{month}</span>
                    <span className="label">Months</span>
                </div>
                <div className="time-item">
                    <span className="number">{week}</span>
                    <span className="label">Weeks</span>
                </div>
                <div className="time-item">
                    <span className="number">{day}</span>
                    <span className="label">Days</span>
                </div>
            </div>
            <span className="divider-text">since this beautiful person was born</span>
        </div>
    )
}