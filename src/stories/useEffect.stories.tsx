import React, {useEffect, useState} from "react";

export default {
    title: 'useEffect demo',
};

export const SimpleExample = () => {
    const [fake, setFake] = useState(0);
    const [counter, setCounter] = useState(0);
    console.log('SimpleExample')
    useEffect(() => {
        console.log('useEffect every render')
        document.title = counter.toString();
    }, )
    useEffect(() => {
        console.log('useEffect only first render (componentDidMount)')
        document.title = counter.toString();
    }, [])
    useEffect(() => {
        console.log('useEffect first render and every counter change')
        document.title = counter.toString();
    }, [counter])

    return <>
        Hello, {counter} - {fake}
        <button onClick={() => setFake(fake + 1)}>Fake+</button>
        <button onClick={() => setCounter(counter + 1)}>Counter+</button>
    </>
}

export const SetTimoutExample = () => {
    const [fake, setFake] = useState(0);
    const [counter, setCounter] = useState(0);
    console.log('SetTimoutExample')
    useEffect(() => {
        setTimeout(() => {
            console.log('Set Timout')
            document.title = counter.toString();
        }, 1000)
    }, )


    return <>
        Hello, {counter} - {fake}
        <button onClick={() => setFake(fake + 1)}>Fake+</button>
        <button onClick={() => setCounter(counter + 1)}>Counter+</button>
    </>
}


