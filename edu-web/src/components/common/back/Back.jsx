import React from 'react'
import { useLocation } from "react-router-dom"

const Back = ({title}) => {
    const location = useLocation()
  return (
    <>
        <section className='back'>
            <h1>{title}</h1>
        </section>
        <div className="marigin"></div>
    </>
  )
}

export default Back