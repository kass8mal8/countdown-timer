const HourView = ({rem_hrs, rem_mins, rem_days, setRemHrs, secs}) => {
    rem_hrs = ((rem_days * 24) + rem_hrs)
    return ( 
        <div>
            <ul>
                <li>Hours</li>
                <li>Minutes</li>
            </ul>
            <ul className="time">
                <li>{rem_hrs}</li>
                <li>:</li>
                <li>{rem_mins < 10 ? "0" + rem_mins : rem_mins}</li>
            </ul>

            <h1>{secs < 10 ? "0" + secs : secs}</h1>
        </div>
     );
}
 
export default HourView;