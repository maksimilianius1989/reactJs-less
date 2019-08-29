import React, {useState} from 'react'
import HW1 from './hw/simple'
import HW2 from './hw/input'
import Lazy from './hw/lazy'
import Derived from './hw/deriveds'

export default function() {
    let [someMin, setSomeMin] = useState(20)

    setTimeout(() => {
        setSomeMin(2)
    }, 2000)

    return (
        <div>
            <h2>Min max simple</h2>
            <HW1 min={1} max={5} />
            <h2>Min max input</h2>
            <HW2 min={20} max={50} />
            <h2>Lazy</h2>
            <Lazy min={someMin} max={50} />
            <h2>Derived input</h2>
            <Derived min={someMin} max={50} key={someMin + 30} />
        </div>
    );
}
