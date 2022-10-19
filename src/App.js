import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { incNumber, decNumber } from './action/action';
import StoreData from './checkStoreData/StoreData';

const App = () => {

    const mynumber = useSelector((state) => state.changeTheNumber);
    const myDatas = useSelector((datas) => datas);
    const dispatch = useDispatch();

    return (

        <>
            {
            // <h1>{myDatas.secondReducer}</h1>
            // <h1>{myDatas.thirdReducer}</h1>
            }

            <div className="main">
                <p>{mynumber}</p>
                <div className='btns'>
                    <button className='decrement' onClick={() => dispatch(decNumber())}><i className="fa-solid fa-minus"></i></button>
                    <button className='increment' onClick={() => dispatch(incNumber())} ><i className="fa-solid fa-plus"></i></button>
                </div>
            </div>


            {
                // <StoreData />
            }
        </>
    );
}

export default App;