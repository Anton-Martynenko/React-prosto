import React, {useState} from "react";
import styles from './Select.module.css'

type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]
}

export function Select(props: SelectPropsType) {
    const selectedItem = props.items.find(i => i.value === props.value);
    const [active, setActive] = useState(false);
    const toggleItems = () => setActive(!active);

    return (
        <>
            <select>
                <option value="1">Minsk</option>
                <option value="2">Moskow</option>
                <option value="3">Omsk</option>
            </select>
            <div className={styles.select}>
                <h3 onClick={toggleItems}>{selectedItem && selectedItem.title}</h3>
                {
                    active &&
                    <div className={styles.item}>
                        {props.items.map(i => <div key={i.value}>{i.title}</div>)}
                    </div>
                }
            </div>
        </>
    );
}

