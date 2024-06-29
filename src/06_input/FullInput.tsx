import React, {ChangeEvent, useState} from 'react';
type FullInputType = {
    addMessage: (title: string) => void
}

export const FullInput = ({addMessage}: FullInputType) => {
    let[title, setTitle] = useState(''); //локальный сетейт
    console.log(title)

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
       //событие которое никогда не меняется
       setTitle(event.currentTarget.value) ;
    }
    const onClickButtonHandler = () => {
        addMessage(title);
        setTitle('');
    }
    return (
        <div>
            <input value = {title} onChange={onChangeInputHandler}/>
            <button onClick = {onClickButtonHandler}>+</button> {/*по нажатию на кнопку данные отправляются в глобальный state*/}
        </div>
    );
};

