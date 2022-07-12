import { Link } from "react-router-dom";
const Chat = () => {
    let chatList = new Array(10).fill("Collins", 1);
    return (
        <div className="fill">       
            <nav
                style={{
                borderRight: "solid 1px",
                padding: "1rem",
                
                }}>
                {chatList.map((singleChat, index) => (
                <Link
                    style={{ display: "block", margin: "1rem 0" }}
                    to={`/chatList/${index}`}
                    key={index}>
                    {singleChat}
                </Link>
                ))}
            </nav>
    
            
            {/* {chatList.map((singleChat) => {
                return (
                    <p>{singleChat}</p>
                )
            })} */}
        </div>
    )
};

export default Chat;