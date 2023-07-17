import EnterRoom from "./EnterRoom";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Room from "./Room";
import { useEffect, useState } from "react";

function Container(){

    const [name,setName] = useState(localStorage.getItem("name") ?? "");
    useEffect(()=>{
        localStorage.setItem("name",name);
    },[name]);

    return(
        <div className="container">
                <Routes>
                    <Route path="/" element={<EnterRoom setName={setName}/>}/>
                    <Route path="/:roomid" element={<Room name={name}/>}/>
                </Routes>
        </div>
    );
}

export default Container;