import { useEffect, useState } from "react"
import "../styles/home.css"
import DayView from "./DayView"
import HourView from "./HourView"

const Home = () => {
    const d = new Date()
    const hrs = ( (31 - (d.getDate())) * 24) - d.getHours()
    const [rem_days, setRemDays] = useState(Math.floor(hrs / 24))

    const [secs, setSecs] = useState(d.getSeconds())    
    const [rem_hrs, setRemHrs] = useState((hrs % 24) - 1)
    const [rem_mins, setRemMins] = useState(60 - d.getMinutes())
    

    useEffect(() => {
        setTimeout(() => {
            setSecs(secs <= 59 ? secs + 1 : 0)
        }, 1000);

        const updateTime = (secs) => {
            if(secs === 59){
                setSecs(0)
                setRemMins(rem_mins - 1)
            }
            if(rem_mins < 1){
                setRemMins(59)
                setRemHrs(rem_hrs - 1)
            }
            if(rem_hrs < 1){
                setRemDays(rem_days - 1)
                setRemHrs(23)
            }
            
        }
        updateTime( secs)
    },[secs, rem_hrs, rem_mins, rem_days])

    return ( 
        <div className="timer-container">
            <div className="timer">
                {rem_days > 1 ? 
                    <DayView 
                        rem_days = {rem_days}
                        rem_hrs ={rem_hrs}
                        rem_mins = {rem_mins}
                        secs = {secs}  /> : 
                    <HourView 
                        rem_hrs ={rem_hrs}
                        rem_days = {rem_days}
                        rem_mins = {rem_mins}
                        secs = {secs}
                        setRemHrs = {setRemHrs} /> 
                }
            </div>
            
        </div>
     );
}
 
export default Home;