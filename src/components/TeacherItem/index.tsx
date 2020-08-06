import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

interface TeacherItemProps {
  name: string
  subject: string
  imageUrl: string
  priceByHour: string
}

const TeacherItem: React.FC<TeacherItemProps> = (props) => {
  return (
    <article className="teacher-item">
      <header>
        <img src={props.imageUrl} alt="Imagem do Proffy" />
        <div>
          <strong>{props.name}</strong>
          <span>{props.subject}</span>
        </div>
      </header>
      <p>
        {props.children}
      </p>
      <footer>
        <p>
          Preço por hora: <strong>{props.priceByHour}</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em Contato
        </button>
      </footer>
    </article>
  )
}

export default TeacherItem
