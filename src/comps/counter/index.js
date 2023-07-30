import React, { useEffect, useState } from 'react';
import axios from '../../axios/axios';

function Counter() {
    const [counter, setCounter] = useState();
    const [err, setErr] = useState();
    const [inputValue, setInputValue] = useState()

    useEffect(() => {
        axios.get("getCounter")
            .then(resp => {
                setCounter(resp.data.counter);
                setErr(null);
            })
            .catch(err => {
                setErr(err);
            })
    }, [])

    const updateCounterValue = (path) => {
        axios.post(path)
            .then(resp => {
                setCounter(resp.data.counter);
                setErr(null);
            })
            .catch(err => {
                setErr(err);
            })
    }



    return (
        <>
            {
                err ?
                    <h2>Something wrong heppend</h2>
                    : <div>
                        <h1>{counter}</h1>
                        <button style={{ marginInline: 10 }} onClick={() => updateCounterValue("increasecounter")} >Increase</button>
                        <button onClick={() => updateCounterValue("decreasecounter")} >Decrease</button>
                    </div>
            }
        </>
    )
}

export default Counter;
