import { useNavigate } from "react-router-dom";

function Head({name}){

    const navigate = useNavigate();

    return (
        <div className="head">
            <div><i className="bi bi-people-fill"></i>Group chat</div>
            <span>{name}</span>
            <div><i className="bi bi-box-arrow-right" onClick={()=>{
                navigate("/");
            }}></i></div>
        </div>
    );
}

export default Head;