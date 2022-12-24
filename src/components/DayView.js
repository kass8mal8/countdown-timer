const DayView = ({rem_days, rem_hrs, rem_mins, secs}) => {
    
    return (  
        <div>
            <ul>
                <li>Days</li>
                <li>Hours</li>
                <li>Minutes</li>
            </ul>
            <ul className="time">
                <li>{rem_days}</li>
                <li>:</li>
                <li> {rem_hrs < 10 ? "0" + rem_hrs : rem_hrs}</li>
                <li>:</li>
                <li>{rem_mins < 10 ? "0" + rem_mins : rem_mins}</li>
            </ul>

            <h1>{secs < 10 ? "0" + secs : secs}</h1>
        </div>
    );
}
 
export default DayView;