import React from "react"
import { blog } from "../../../dummydata"
import "./footer.css"
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      {/* <section className='newletter'>
        <div className='container flexSB'>
          <div className='left row'>
            <h1>Подпишитесь и получайте новости о нас</h1>
          </div>
          <div className='right row'>
            <input type='text' placeholder='напишите свой почтовый адрес' />
            <i className='fa fa-paper-plane'></i>
          </div>
        </div>
      </section> */}
      <footer>
        <div className='container padding'>
          <div className='box logo'>
            <h1>ACADEMIA</h1>
            <span>ЦЕНТР ПОДГОТОВКИ К ЕНТ</span>
            <p>Ваш помощник при подготовке к сдаче ЕНТ.</p>

            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-instagram icon'></i>
          </div>
          <div className='box link'>
            <h3>Быстрые Ссылки</h3>
            <ul>
              <li><Link to="/contact">Контакты</Link></li>
              <li><Link to="/pricing">Цены</Link></li>
              <li><Link to="/courses">Курсы</Link></li>
              <li><Link to="/journal">Блог</Link></li>
            </ul>
          </div>
          <div className='box last'>
            <h3>Остались вопросы?</h3>
            <ul>
              <li>
                <i className='fa fa-map'></i>
                Almaty
              </li>
              <li>
                <i className='fa fa-phone-alt'></i>
                +9 696 6969 696
              </li>
              <li>
                <i className='fa fa-paper-plane'></i>
                academia@prep.unt
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>
          Copyright ©2023 All rights reserved
        </p>
      </div>
    </>
  )
}

export default Footer
