import { useEffect, useRef, useState } from "react";
import ReactQuill from "react-quill";

function MessageField({message}){

    const boxRef = useRef(null);

    useEffect(()=>{
        scrollBottom();
    },[message]);

    const scrollBottom = ()=>{
        if(boxRef.current){
            const { scrollHeight, clientHeight } = boxRef.current;
            boxRef.current.scrollTop = scrollHeight - clientHeight;
        }
    }

    return (
        <div className="message" ref={boxRef}>
           {[...message].map((msg,index)=>(
                <div key={index} className="msgbox">
                    <div className="sendername"><i className="bi bi-person-circle"></i>{msg.sender}:</div>
                    <div className="msgdata">
                        <ReactQuill className="llm" value={msg.data} readOnly={true}/>
                    </div>
                </div>
           ))}

        </div>
    );
}

export default MessageField;