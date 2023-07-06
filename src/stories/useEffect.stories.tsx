import React, {useEffect, useState} from "react";

export default {
    title: 'useEffect demo',
};

export const SimpleExample = () => {
    const [counter, setCounter] = useState(0);
    console.log('SimpleExample')
    useEffect(() => {
        console.log('useEffect')
    })

    return <>
        Hello, {counter}
        <button onClick={() => setCounter(counter + 1)}>+</button>
    </>
}


