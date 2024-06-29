import {MouseEvent} from 'react';

/*    const myFirstSubsciber = (event: MouseEvent<HTMLButtonElement>) => {
        console.log('Hello myFirstSubsciber')
    }
    const mySecondSubsciber = (event: MouseEvent<HTMLButtonElement>) => {
        console.log('Hello mySecondSubsciber')
    }*/
/*    const onClickHandler = (name: string) => {
        console.log(name);
    }*/

type ButtonType = {
    name: string
    callBack:() => void
}

export const Button = (props: ButtonType) => {

    const onClickHandler = () => {
        props.callBack()
    }
    return (
        <div>
            {/*<button onClick={(event) => {console.log('Hello')}}>Youtubechanel</button>*/}
            {/*            <button onClick={(event: MouseEvent<HTMLButtonElement>) => onClickHandler('Katya')}>Youtubechanel</button>
            <button onClick={() => onClickHandler('Lena')}>Youtubechane2</button>*/}

            <button onClick={onClickHandler}>{props.name}</button>
        </div>
    )
}