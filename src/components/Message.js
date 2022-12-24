import "../styles/message.css"
import msg from "../assets/msg.jpg"

const Message = () => {

    const handleMessage =()=> {
       document.querySelector('form').classList.toggle('active')
    }

    return (  
        <div className="message-container">
                <form >
                    <p onClick={handleMessage}>+</p>
                    <input type="text" placeholder="your name..." />
                    <input type="text" placeholder="your message..." />
                    <button>leave message</button>
                </form>

            
                <img 
                    src={msg} 
                    alt="msg icon" 
                    width= "30"
                    onClick={handleMessage} />


        </div>
    );
}
 
export default Message;