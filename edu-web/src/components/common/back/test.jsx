import React from 'react'
import { useLocation } from "react-router-dom"

const Back = ({title}) => {
    const location = useLocation()
  return (
    <>
        <section className='backo'>
            <h1>{title}</h1>
        </section>
    </>
  )
}

export default Back