import './App.css'
import { useRef } from 'react'
import image from '../src/assets/uber.png'

const App = () => {
  const copy = useRef(null)
  const span = useRef(null)
  const spanValue = async () =>{
    try {
      await navigator.clipboard.writeText(span.current.textContent)
    } catch (error) {
      console.log(error)
    }
  }
  const copied = () =>{
    copy.current.textContent = "COPIED"
    setTimeout(initial, 3000)
  }
  const initial = () =>{
    copy.current.textContent = "COPY CODE"
  }
  const handleClick = () =>{
    spanValue()
    copied()
  }

  return (
    <div className='container'>
      <div className="container__image">
        <img src={image} alt="image" />
      </div>
      <div className="container__description">
        <span>20% flat off on all rides within the city</span>
        <span>Using HDFC Credit Card</span>
      </div>
      <div className="container__coupon">
        <span className='container__coupon--one' ref={span}>AA-784-421</span>
        <span className='container__coupon--two' onClick={handleClick} ref={copy}>COPY CODE</span>
      </div>
      <div className="container__valid">
        <span>Valid Till: 20 Dec 2028</span>
      </div>
    </div>
  )
}

export default App
