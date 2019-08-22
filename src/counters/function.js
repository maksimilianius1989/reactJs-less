import React, {useState} from 'react';

export default function() {
    let [cnt, setCnt] = useState(1)
    let [other, setOther] = useState(10);

    let increase = () => {
        setCnt(cnt + 1)
        setOther(Math.random())
    }

    return (
        <div>
            <strong>cnt {cnt}</strong>
            <br/>
            <strong>other {other}</strong>
            <br/>
            <button onClick={increase}>Function Plus 1</button>
        </div>
    )
}