import React, {useState} from 'react';

export default function() {
    let [cnt, setCnt] = useState(1)

    let increase = () => {
        setCnt(cnt + 1);
    }

    return (
        <div>
            <strong>{cnt}</strong>
            <br/>
            <button onClick={increase}>Function Plus 1</button>
        </div>
    )
}