import React from 'react';
import './App.css';
import counter from './store/counter';
import {observer} from 'mobx-react-lite';

export const Counter = observer(() => {

    const minusHandle = () => {
        counter.decrement()
    }
    const plusHandle = () => {
        counter.increment()
    }

    return(
        <div className={'container'}>
            <div className={'countDisplay'}>
                {counter.total}
            </div>
            <div className={'panel'}>
                <button className={'btn'} onClick={minusHandle}> minus </button>
                <button className={'btn'} onClick={plusHandle}> plus </button>
            </div>
        </div>

    )
})