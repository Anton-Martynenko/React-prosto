import React, {useCallback, useMemo, useState} from "react";
import {NewMessageCounter} from "./reactMemo.stories";

export default {
    title: 'useMemo',
};

export const DifficultCountingExample = () => {

    const [a, setA] = useState<number>(5);
    const [b, setB] = useState<number>(5);

    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(() => {
        let tempResultA = 1;
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 100000) {
                fake++;
                const fakeValue = Math.random();
            }
            tempResultA = tempResultA * i;
        }
        return tempResultA;
    }, [a]);



    for (let i = 1; i <= b; i++) {
        resultB = resultB * i;
    }

    return <>
        <input value={a} onChange={e => setA(Number(e.currentTarget.value))}/>
        <input value={b} onChange={e => setB(+e.currentTarget.value)}/>
        <hr />
        <div>
            Result for a: {resultA}
        </div>
        <div>
            Result for b: {resultB}
        </div>
    </>
}

export const UsersSecret = (props: {users: Array<string>}) => {
    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
}

export const Users = React.memo(UsersSecret);

export const HelpsToReactMemo = () => {
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(['Dimych', 'Valera', 'Artem']);
    const addUser = () => {
        const newUsers = [...users, 'Sveta ' + new Date().getTime()];
        setUsers(newUsers);
    }

    const newArray = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf('a') > -1);
    }, [users]);

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addUser}>add user</button>
        {counter}
        <Users users={newArray} />
    </>
}

export const LikeUseCallback = () => {
    console.log("LikeUseCallback");
    const [counter, setCounter] = useState(0);
    const [books, setBooks] = useState(['React', 'JS', 'CSS', 'HTML']);
    // const addBook = () => {
    //     const newBooks = [...books, 'Angular ' + new Date().getTime()];
    //     setBooks(newBooks);
    // }

    const memoizedAddBook = useMemo(() => {
        return () => {
            console.log("books")
            const newBooks = [...books, 'Angular ' + new Date().getTime()];
            setBooks(newBooks);
        }
        }, [books]);
    const memoizedAddBook2 = useCallback(() => {
            console.log("books")
            const newBooks = [...books, 'Angular ' + new Date().getTime()];
            setBooks(newBooks);
    }, [books]);

    // const newArray = useMemo(() => {
    //     return books.filter(u => u.toLowerCase().indexOf('a') > -1);
    // }, [books]);

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>

        {counter}
        <Book addBook={memoizedAddBook2}/>
    </>
}

export const BooksSecret = (props: {addBook: () => void}) => {
    console.log("BooksSecret")
    return <div>
        <button onClick={() => props.addBook()}>add book</button>
        {/*{props.books.map((book, i) => <div key={i}>{book}</div>)}*/}
    </div>
}

export const Book = React.memo(BooksSecret);




