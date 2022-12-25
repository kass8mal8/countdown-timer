import "../styles/message.css"
import msg from "../assets/msg.jpg"

const Message = () => {

    const handleMessage =()=> {
       document.querySelector('form').classList.toggle('active')
    }

    const fetchdata = async(url)=> {
        try {
            const response = await fetch(url)
            const data = await response.json()
            console.log(data);
        } catch (error) {
            console.log(error.message)
        }
    }
    

    return (  
        <div className="message-container">
            <img 
                src={msg} 
                alt="msg icon" 
                width= "30"
                onClick={handleMessage} />

            <div>
                <p>New Year messages</p>

            </div>
        </div>
    );
}
 
export default Message;