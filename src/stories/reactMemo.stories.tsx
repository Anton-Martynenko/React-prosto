import {useState} from "react";

export default {
    title: 'React.memo demo',
};

export const NewMessageCounter = (props: {count: number}) => {
    return <div>{props.count}</div>
}

export const Users = (props: {users: Array<string>}) => {
    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
}

export const Example1 = () => {
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(['Dimych', 'Valera', 'Artem']);
    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <NewMessageCounter count={counter} />
        <Users users={users} />
    </>
}

