import React from 'react'
import "./hero.css"
import Title from '../../common/title/Title'

const Hero = () => {
  return (
    <>
        <section className='hero'>
            <div className="container">
                <div className="row">
                    <Title subtitle='WELCOME TO ACADEMIA' title='Best Online Education'/>
                    <p>ВЫУЧИ АНГЛИЙСКИЙ ЯЗЫК С ОНЛАЙН РЕПЕТИТОРОМ!</p>
                    <div className="button">
                        <button className='primary-btn'>
                            GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
                        </button>
                        <button>
                            VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
                        </button>
                    </div>
                </div>
            </div>
        </section>
        <div className="margin"></div>
    </>
  )
}

export default Hero