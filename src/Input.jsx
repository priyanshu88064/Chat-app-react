import { useEffect, useRef, useState } from "react";
import ReactQuill from "react-quill";
import skt from "./socket";
import 'react-quill/dist/quill.snow.css';

function Input({setMessage,name}){

    const socket = useRef(null);
    const textRef = useRef(null);
    const [text,setText] = useState('');

    useEffect(()=>{

        socket.current = skt();

        socket.current.on('recieve-message',(newMessage)=>{
            setMessage(curr=>[...curr,newMessage]);
        });

        return () =>{
            socket.current.off("send-message");
            socket.current.off("recieve-message");
            socket.current.disconnect();
        }
    },[]);

    const handleButton = ()=>{
        if(text.length===0) return;
        const newMessage = {
            sender:name,
            data:text
        }

        socket.current.emit('send-message',newMessage);

        setMessage(curr=>[...curr,newMessage]);
        setText('');
    }

    const modules = {
        toolbar: [
          ['bold', 'italic', 'strike', 'blockquote'],
          [{ 'list': 'ordered' }, { 'list': 'bullet' }],
          ['code-block']
        ],
      };

    return (
        <div className="input">
            <div className="inpbox">
               <div className="inmsg">
                    <ReactQuill
                        value={text}
                        onChange={e=>{
                            setText(e);
                        }}
                        modules={modules}
                    />
               </div>
               <div className="insend">
                <button className="btn btn-success" onClick={handleButton}><i className="bi bi-send-fill"></i></button>
               </div>
            </div>
        </div>
    );
}

export default Input;