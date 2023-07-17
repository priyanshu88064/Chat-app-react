import Head from './Head';
import MessageField from './MessageField';
import Input from './Input';
import { useEffect, useRef, useState } from 'react';

function Room({name}){

    const [message,setMessage] = useState([]);

    return(
        <div className="room">
            <Head name={name}/>
            <MessageField message={message}/>
            <Input setMessage={setMessage} name={name}/>
        </div>
    );
}

export default Room;