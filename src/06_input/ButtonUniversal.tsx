import React from 'react';

type ButtonType = {
    name: string
    callBack:() => void
}

export const ButtonUniversal = (props: ButtonType) => {
    const onClickHandler = () => {
        props.callBack()
    }
    return (
    <button onClick={onClickHandler}>{props.name}</button>
    );
};

