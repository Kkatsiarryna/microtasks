import {log} from 'node:util';
import {useState} from 'react';

export const UseStateComponent = () => {
    //let a = 1;

    let [a, setA] = useState(1); // a - состояние, setA - функция в которой находится состояние

    const onClickHadler = () => {
        setA(++a);
        console.log(a)
    }
    const onClickHadler2 = () => {
        setA(0);
        console.log(a)
    }

    return(
        <div>
            <h1>{a}</h1>
            <button onClick={onClickHadler}> number</button>
            <button onClick={onClickHadler2}>0</button>
        </div>

    )
}