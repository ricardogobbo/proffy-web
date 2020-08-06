import React from 'react'
import PageHeader from '../../components/PageHeader'

import './styles.css'
import TeacherItem from '../../components/TeacherItem'

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis pra você">
        <form action="" id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Matéria</label>
            <input type="text" id="subject" />
          </div>
          <div className="input-block">
            <label htmlFor="weekday">Dia da Semana</label>
            <input type="text" id="weekday" />
          </div>
          <div className="input-block">
            <label htmlFor="time">Horário</label>
            <input type="text" id="time" />
          </div>
        </form>
      </PageHeader>

      <main>
        <TeacherItem
          name="Renato Augusto Campos"
          subject="Matemática"
          priceByHour="R$120,00"
          imageUrl="https://placeimg.com/200/200/people"
        >
          At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
          aliquyam erat, sed diam voluptua.
        </TeacherItem>
        <TeacherItem
          name="Renato Augusto Campos"
          subject="Matemática"
          priceByHour="R$120,00"
          imageUrl="https://placeimg.com/200/200/people"
        >
          At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
          aliquyam erat, sed diam voluptua.
        </TeacherItem>
        <TeacherItem
          name="Felipe Maciel D'Ajuda"
          subject="Português"
          priceByHour="R$90,00"
          imageUrl="https://placeimg.com/200/200/people"
        >
          At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
          aliquyam erat, sed diam voluptua.
        </TeacherItem>
        <TeacherItem
          name="Renato Augusto Campos"
          subject="Matemática"
          priceByHour="R$120,00"
          imageUrl="https://placeimg.com/200/200/people"
        >
          At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
          aliquyam erat, sed diam voluptua.
        </TeacherItem>
      </main>
    </div>
  )
}

export default TeacherList
