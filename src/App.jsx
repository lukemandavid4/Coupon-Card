import './App.css'
import image from '../src/assets/uber.png'
const App = () => {
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
        <span className='container__coupon--one'>AA-784-421</span>
        <span className='container__coupon--two'>COPY CODE</span>
      </div>
      <div className="container__valid">
        <span>Valid Till: 20 Dec 2027</span>
      </div>
    </div>
  )
}

export default App
