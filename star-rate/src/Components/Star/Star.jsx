import {useState } from 'react'
import { FaStar } from "react-icons/fa"

function Star({NosoSatr = 5}) {

    
    const [ rating, setRating ] = useState(0)
    const [ hover, setHover ] = useState(0)

    const handlClick = (currentIndex) => {
        setRating(currentIndex)
    }
    const handlMoove = (currentIndex) => {
        setHover(currentIndex)
    }
    const handlLeave = () => {
        setHover(0)
    }

  return (
    <div className='start-rating'>
        {
          [...Array(NosoSatr)].map((_, index) => {
            index += 1

            return <FaStar 
              key={index} 
              className={ index <= (hover  || rating )  ? "active" : "iactive"} 
              size={40} 
              onClick={() => handlClick(index)} 
              onMouseMove={() => handlMoove(index)} 
              onMouseLeave={() => handlLeave(index)} 
            />
          })
        }
    </div>
  )
}

export default Star