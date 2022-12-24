import { useEffect, useState } from "react"
import "../styles/home.css"
import DayView from "./DayView"
import HourView from "./HourView"

const Home = () => {
    const d = new Date()
    const hours = d.getHours()
    const day = 31 - (d.getDate())
    const hrs = (day * 24) - hours
    const rem_days = Math.floor(hrs / 24)

    const [mins, setMins] = useState(d.getMinutes())
    const [secs, setSecs] = useState(d.getSeconds())    
    const [rem_hrs, setRemHrs] = useState(hrs % 24)
    const [rem_mins, setRemMins] = useState(60 - (mins + 1))
    

    useEffect(() => {
        setTimeout(() => {setSecs(secs + 1)}, 1000);

        const updateTime = (secs) => {
            if(secs === 60){
                setSecs(0)
                setRemMins(rem_mins - 1)
            }
            if(rem_mins === 0){
                setMins(0)
                setRemHrs(rem_hrs - 1)
            }
            
        }
        updateTime( secs)
    },[secs, rem_hrs, rem_mins])

    return ( 
        <div className="timer">
            
            {rem_hrs !== 48 ? 
                <DayView 
                    rem_days = {rem_days}
                    rem_hrs ={rem_hrs}
                    rem_mins = {rem_mins}
                    secs = {secs}  /> : 
                <HourView 
                    rem_hrs ={rem_hrs}
                    rem_mins = {rem_mins}
                    secs = {secs} /> 
            }

        </div>
     );
}
 
export default Home;