import {useState} from 'react';


type CurrentMoneyType = {
    banknots: string
    nomonal: number
    number: string
}

type FilterComponentPropsType  = {
    currentMoney: CurrentMoneyType[]
    onclickFilterHandler: (nameButton: 'all' | 'dollar' | 'ruble') => void
}

export const FilterComponent = ({currentMoney, onclickFilterHandler}: FilterComponentPropsType) => {
    return(
        <>
            <ul>
                {currentMoney.map((objFromMoneyArr, index) => {
                    return (
                        <li key={index}>
                            <span>{objFromMoneyArr.banknots}</span>
                            <span>{objFromMoneyArr.nomonal}</span>
                            <span>{objFromMoneyArr.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft: '35px'}}>
                <button onClick={()=>onclickFilterHandler('all')}>all</button>
                <button onClick={()=>onclickFilterHandler('ruble')}>ruble</button>
                <button onClick={()=>onclickFilterHandler('dollar')}>dollar</button>
            </div>
        </>

    )
}

//  let currentMoney = money.filter((filteredMoney) => filteredMoney.banknots==='RUBLS')