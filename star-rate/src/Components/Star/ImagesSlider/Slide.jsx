import React, { useEffect, useState } from 'react'
import { BsArrowRightCircleFill, BsArrowLeftCircleFill } from "react-icons/bs"

function Slide({ url, limit = "5", page = "1" }) {

    const [ images, setImages ] = useState([])
    const [ errorMessage, setErrorMessage ] = useState(null)
    const [ currentIndex, setCurrentIndex ] = useState(0)
    const [ loading, setLoading ] = useState(false)

    async function fetchImages(getUrl) {

        try {
            setLoading(true)
            const res = await fetch(`${getUrl}?page=${page}&limit=${limit}`)
            const data =  await res.json()
            setImages(data)
            console.log(data)
            setLoading(false)
        } catch (error) {
            setErrorMessage(error.message)
            setLoading(false)
        }
        
    }

    const handlLeft = () => {
        setCurrentIndex( currentIndex === 0 ? images.length - 1 : currentIndex - 1 )
    }

     const handlRight = () => {
        setCurrentIndex( currentIndex === images.length - 1 ? 0 : currentIndex + 1 )
    }

    useEffect(() => {
        fetchImages(url)
    }, [url])


    if(loading){
        return <div>Loading...</div>
    }

    if(errorMessage !== null){
        return <div>Error occured, please try later</div>
    }

  return (
    <div className='image-container'>
        <BsArrowLeftCircleFill onClick={() => handlLeft()} className='arrow arrow-left'/>
        {
            images && images.length ? 

                images.map((imageItem, index) => {
                    return <img 
                        key={imageItem.id} 
                        alt={imageItem.download_url}
                        src={imageItem.download_url}
                        className={ currentIndex === index ? 'current-image' : 'iactive-image' }
                        />
                })

            : null
        }
        <BsArrowRightCircleFill onClick={handlRight}  className='arrow arrow-right'/>
        <span className='circl-indicator'>

            {
                images && images ? 
                    images.map((_, index) => {
                        return <button key={index} className={ currentIndex === index ? 'current-indicator isAcive' : 'current-indicator' }></button>
                    })
                : null
            }
        </span>
    </div>
  )
}

export default Slide