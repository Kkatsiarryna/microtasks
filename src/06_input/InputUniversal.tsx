import React, {ChangeEvent} from 'react';

type InputUniversalType = {
    setTitle: (title: string) => void
    title: string
}

export const InputUniversal = ({setTitle,title} : InputUniversalType) => {

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        //событие которое никогда не меняется
        setTitle(event.currentTarget.value) ;
    }

    return (
        <input value={title} onChange={onChangeInputHandler}/>
    );
};

