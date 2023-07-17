import { v4 as rand } from "uuid";
import { useNavigate } from "react-router-dom";

function EnterRoom({setName}){

    const navigate = useNavigate();

    return (
        <div className="enterroom">
            <form onSubmit={e=>{
                e.preventDefault();
                navigate("/" + rand());
            }}>
                <input type="text" placeholder="Enter your name" required onChange={e=>{
                    setName(e.target.value);
                }}/><br/>
                <button className="btn btn-secondary"><i className="bi bi-person-up"></i>Join Room</button>
            </form>
        </div>
    );
}
export default EnterRoom;