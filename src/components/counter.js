import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'

export default function Counter() {

    const [cartData, setCartData] = useState(0);

    const {cart, count} = useSelector(state => ({
        
    }))

    const dispatch = useDispatch()
    
    const incrFunc =()=>{
        dispatch({
            type:"INCR"
        })
    }
    const decrFunc =()=>{
        dispatch({
            type:"DECR"
        })
    }

    const addToCartFunc = () =>{
        dispatch({
            type: "ADDCART",
            payload : cartData
        })
    }

  return (
    <div className='counter'>
        <h1>Votre panier : {cart}</h1>
        {/*<button onClick={incrFunc}>+1</button>
        <button onClick={decrFunc}>-1</button>*/}

        <input 
        value={cartData} 
        type="number" 
        onInput={(e => setCartData(e.target.value))}/>
        <br />
        <button onClick={addToCartFunc}>Ajouter au panier</button>
    </div>
  )
}
