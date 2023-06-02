import React from "react"
import "./courses.css"
import { online } from "../../dummydata"
import Heading from "../common/header/Heading"
import { Link } from "react-router-dom";

const OnlineCourses = () => {
  return (
    <>
      <section className='online'>
        <div className='container'>
          <Heading subtitle='COURSES' title='Наши Онлайн Курсы' />
          <div className='content grid3'>
            {online.map((val) => (
              <Link to={`/courses/${val.courseName.toLowerCase()}`} className="box">
              <div className='box'>
                <div className='img'>
                  <img src={val.cover} />
                  <img src={val.hoverCover} alt='' className='show' />
                </div>
                <h1>{val.courseName}</h1>
                <span>{val.course}</span>
              </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default OnlineCourses
