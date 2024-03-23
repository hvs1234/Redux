import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import {incNumber , decNumber} from './actions/index'
import './style.css'

const App = () => {

  const changeNumber = useSelector((state) => state.changeTheNumber);
  const myDispatch = useDispatch();

  return (
    <>

      {/* Increment Counter */}

      <div className="container">
        <h1>Increment / Decrement Counter</h1>
        <h3>Using React And Redux</h3>
        <div className="counter-box">
          <button className='btn plus-btn' onClick={() => myDispatch(decNumber())}>-</button>
          <input className='input' type="text" value={changeNumber}/>
          <button className='btn minus-btn' onClick={() => myDispatch(incNumber())}>+</button>
        </div>
      </div>

    </>
  )
}

export default App