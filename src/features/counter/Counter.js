import { SelectField, Box } from '@chakra-ui/react'
import React, { useState } from 'react'
// 8、reducerを扱うのに必要なものをimportする
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset, incrementByAmount } from './counterSlice'

const Counter = () => {
// コンポーネントにstateを追加していく
    const count = useSelector((state) => state.counter.count )
    const dispatch = useDispatch();
    const [incrementAmount, setIncrementAmount] = useState(0);
    const addValue = Number(incrementAmount) || 0;
    const resetAll = () => {
        setIncrementAmount(0);
        dispatch(reset());
    }

  return (
        <Box mt="40">
            <p>{count}</p>
            <div>
                {/* dispatchの引数に呼び出したいactionの名前を書く */}
                <button onClick={() => dispatch(increment())}>+</button>
                <button onClick={() => dispatch(decrement())}>-</button>
            </div>

            <input 
                type="text" 
                value={incrementAmount} 
                onChange={(e) => {setIncrementAmount(e.target.value)}}
            />
            <div>
                                        {/* ↓ addValueがaction.payloadに値する引数？？？ */}
                <button onClick={() => {dispatch(incrementByAmount(addValue))}} >Add Amount</button>
                <button onClick={resetAll} >Reset</button>
            </div>
        </Box>
  )
}

export default Counter