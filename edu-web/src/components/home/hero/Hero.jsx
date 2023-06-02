import React from 'react';
import './hero.css';
import Title from '../../common/title/Title';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <>
        <section className='hero'>
            <div className="container">
                <div className="row">
                    <Title subtitle='Добро Пожаловать в ACADEMIA' title='Онлайн подготовка'/>
                    <p>ПОДГОТОВЬСЯ К ЕНТ ВМЕСТЕ С НАМИ!</p>
                    {/* <div className="button">
                        <Link to='/login'>
                            <button className='primary-btn'>
                                НАЧАТЬ СЕЙЧАС <i className='fa fa-long-arrow-alt-right'></i>
                            </button>
                        </Link>
                        <Link to='/courses'>
                            <button>
                                ПОСМОТРЕТЬ КУРСЫ <i className='fa fa-long-arrow-alt-right'></i>
                            </button>
                        </Link>
                    </div> */}
                </div>
            </div>
        </section>
        <div className="marigin"></div>
    </>
  )
}

export default Hero;