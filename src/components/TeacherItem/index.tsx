import React from 'react'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';
import TeacherForm from '../../pages/TeacherForm';


function TeacherItem(){
  return(
    <article className="teacher-item">
    <header>
      <img src="https://scontent-gru2-1.xx.fbcdn.net/v/t31.0-8/21752625_1297239880402853_7705251264466380479_o.jpg?_nc_cat=109&_nc_sid=8bfeb9&_nc_eui2=AeEHq-09TA92Ujav_pUD5hgTlgvBUybIdLqWC8FTJsh0uvHgyWWaKZ5VrUz_m7fZt18GPn-Kh_xPQmnDnSy0LTse&_nc_ohc=EA7StEFw4GoAX-nKlr4&_nc_oc=AQkPAFxVYh0e6D9aE5TidII8OtkSqS13fIU_IDUpZRTnn53Lwr4rkNwRKHJTb3LbpXA&_nc_ht=scontent-gru2-1.xx&oh=b59d832520b28abf6e855a6a193dc350&oe=5F505109" alt=""/>
        <div>
          <strong>Joao Pedro Correia</strong>
          <span>Protheus</span>
        </div>
    </header>
      <p>Conhecimento em Infraestrutura do protheus atuando em migrações, e-socia, Reinf, Analista de requisitos.
        <br/>
        Visando auxiliar em todas as duvidas recorrentes.<br/>
      </p>
      <footer>
        <p>
          Preço/Hora
          <strong>R$50,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="whatsappIcon"/>
          Entrar em contato
          </button>
        </footer>
    </article>
  )
}

export default TeacherItem