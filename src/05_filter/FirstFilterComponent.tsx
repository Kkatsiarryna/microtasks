import React, {useState} from 'react';
import {FilterComponent} from './FilterComponent';

export const FirstFilterComponent =() => {
    type FilterType = 'all' | 'dollar' | 'ruble';
    const [money, setMoney] = useState([
        { banknots: 'Dollars', nomonal: 100, number: ' a1234567890' },
        { banknots: 'Dollars', nomonal: 50, number: ' z1234567890' },
        { banknots: 'RUBLS', nomonal: 100, number: ' w1234567890' },
        { banknots: 'Dollars', nomonal: 100, number: ' e1234567890' },
        { banknots: 'Dollars', nomonal: 50, number: ' c1234567890' },
        { banknots: 'RUBLS', nomonal: 100, number: ' r1234567890' },
        { banknots: 'Dollars', nomonal: 50, number: ' x1234567890' },
        { banknots: 'RUBLS', nomonal: 50, number: ' v1234567890' },
    ])

    const [currentMoney, setCurrentMoney] = useState(money);

    const onclickFilterHandler = (nameButton: FilterType) => {

        nameButton === 'ruble' ? setCurrentMoney(money.filter((filteredMoney) => filteredMoney.banknots==='RUBLS'))
            : nameButton === 'dollar' ? setCurrentMoney( money.filter((filteredMoney) => filteredMoney.banknots==='Dollars'))
                : setCurrentMoney( money)
    }

    return(
        <FilterComponent currentMoney={currentMoney} onclickFilterHandler={ onclickFilterHandler}/>
    )
}