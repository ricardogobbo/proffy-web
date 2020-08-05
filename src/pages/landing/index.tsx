import React from 'react'

import logoImg from '../../assets/images/logo.svg'
import landingImg from '../../assets/images/landing.svg'

import studyIcon from '../../assets/images/icons/study.svg'
import giveClassesIcon from '../../assets/images/icons/give-classes.svg'
import purprleHeartIcon from '../../assets/images/icons/purple-heart.svg'

import './styles.css'

function Landing() {
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div id="logo-container">
          <img src={logoImg} alt="Proffy" />
          <h2>Sua melhor plataforma de estudos online</h2>
        </div>

        <img src={landingImg} alt="Hero" className="hero-image" />

        <div className="buttons-container">
          <a href="#" className="study">
            <img src={studyIcon} alt="Estudar" />
            Estudar
          </a>

          <a href="#" className="give-classes">
            <img src={giveClassesIcon} alt="Dar Aulas" />
            Dar Aulas
          </a>
        </div>

        <span className="total-connections">
          Total de 1239 conexões já realizadas
          <img src={purprleHeartIcon} alt="Conexões" />
        </span>
      </div>
    </div>
  )
}

export default Landing