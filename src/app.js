import React from 'react'
import CounterClass from './counters/class'
import CounterFunction from './counters/function'
import MyComponent from './counters/my_component'

export default function() {
    return (
        <div>
            <h2>Counter as class</h2>
            <CounterClass/>

            <h2>Counter as function</h2>
            <CounterFunction/>

            <h2>My component</h2>
            <MyComponent min={2} max={5}/>
        </div>
    );
}