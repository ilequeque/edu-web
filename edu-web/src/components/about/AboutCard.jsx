import React from 'react'
import Title from "../common/title/Title"
import "./about.css"
import { homeAbout } from "../../dummydata"
import AWrapper from './AWrapper'

const AboutCard = () => {
  return (
    <>
      <section className="aboutHome">
        <div className="container flexSB">
           <div className="left row">
                <img src="./images/about.jpg" alt="" /> 
           </div>
           <div className="right row">
                <Title subtitle='ПОДГОТОВЬСЯ К ЕНТ' title= 'Достоинства Нашей Платформы'/>
                <div className="items">
                  {homeAbout.map((val) => {
                    return (
                      <div className="item flexSB">
                        <div className="img">
                          <img src={val.cover} alt="" />
                        </div>
                        <div className="text">
                          <h2>{val.title}</h2>
                          <p>{val.desc}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
            </div> 
        </div>  
      </section>
      {/* <AWrapper />   */}
    </>
  )
}

export default AboutCard