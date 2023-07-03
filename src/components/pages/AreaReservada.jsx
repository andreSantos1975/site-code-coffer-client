import React from 'react'
import './About.css'
import videoAbout from '../../../public/videos/contato.mp4'
//import  imgReservada from '../../../public/img/carousel4.jpg'
import './AreaReservada.css'


export const AreaReservada = () => {
    return (
      <section id='about'>
        <div className='container' style={{ height: '500px' }}>
          <div className='row'>
            <div className='col-lg-5'>
              {/*<img src={imgReservada} alt="Logo" className='logo-img' style={{ width: '220px', height: '320px', cursor: 'pointer', marginTop: '100px' }} />}*/}
              <video src={videoAbout} controls className='video' style={{ width: '100%', height: '100%', cursor: 'pointer', marginTop: '100px' }} />
            </div>
            <div className='col-lg-5' style={{ marginTop: '100px', marginLeft: '73px' }}>
              <h1>Área Reservada</h1>
              <div className='divder'></div>
              <p>"Área Reservada Para Membros.</p>
              <p>Comunidade dedicada para o crescimento da Nação."</p>
              <button className='button'>Entre em contato</button>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <p className='seta-chatbot' style={{ bottom: '16px', marginLeft: '450px', marginTop: '40px' }}>Clique no ícone da assistente virtual no canto inferior direito<span className="seta"></span></p>
            
            </div>
          </div>
        </div>
      </section>
    )
  }