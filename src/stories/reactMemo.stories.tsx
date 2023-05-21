export default {
    title: 'React.memo demo',
};

export const messageCounter = (props: any) => {
    return <div>{props.count}</div>
}

export const Users = (props: {users: Array<string>}) => {
    return <div>{props.users.map((u, i) => <div>{u}</div>)}</div>
}


