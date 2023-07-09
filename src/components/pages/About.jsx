import React from 'react';
import { Link } from 'react-router-dom';

import './About.css'
import videoAbout from '../../../public/videos/contato.mp4'
//import imgAbout from '../../../public/img/carousel4.jpg'


export const About = () => {
  return (
    <section id='about'>
      <div className='container' style={{ height: '500px', position: 'relative', top: '160px' }}>
        <div className='row'>
          <div className='col-lg-5'>
            {/* <img src={imgAbout} alt="Logo" className='logo-img' style={{ width: '220px', height: '320px', cursor: 'pointer', marginTop: '100px' }} />*/}
            <video src={videoAbout} controls className='video' style={{ width: '100%', height: '100%', cursor: 'pointer', marginTop: '70x' }} />
          </div>
          <div className='col-lg-5' style={{ marginTop: '40px', marginLeft: '73px' }}>
            <h1>O futuro das Empresas</h1>
            <div className='divder'></div>
            <p>"Faça parte da evolução tecnológica.</p>
            <p>Não seja uma das empresas que deixarão de existir. Nas próximas décadas, milhões de empresas correm o risco de desaparecer por não se adaptarem às novas formas de se relacionar com os clientes."</p>
            <Link to='/formulario' className='button'>Entre em contato</Link>
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