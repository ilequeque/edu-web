import React from 'react';
import './hero.css';
import Title from '../../common/title/Title';
import { useHistory } from 'react-router-dom';
import Login from '../../login/Login';

const Hero = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push(Login); // Replace '/login' with the actual login route path
  };
  return (
    <>
        <section className='hero'>
            <div className="container">
                <div className="row">
                    <Title subtitle='Добро Пожаловать в ACADEMIA' title='Онлайн подготовка'/>
                    <p>ПОДГОТОВЬСЯ К ЕНТ ВМЕСТЕ С НАМИ!</p>
                    <div className="button" onClick={handleClick}>
                        <button className='primary-btn' onClick={handleClick}>
                            НАЧАТЬ СЕЙЧАС <i className='fa fa-long-arrow-alt-right'></i>
                        </button>
                        <button>
                            ПОСМОТРЕТЬ КУРСЫ <i className='fa fa-long-arrow-alt-right'></i>
                        </button>
                    </div>
                </div>
            </div>
        </section>
        <div className="marigin"></div>
    </>
  )
}

export default Hero