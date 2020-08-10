import React, { useState, FormEvent } from 'react'
import { useHistory } from 'react-router-dom'

// Componentes próprios do projeto
import PageHeader from '../../components/PageHeader'
import Input from '../../components/Input'
import TextArea from '../../components/TextArea'
import Select from '../../components/Select'

// Constantes do projeto
import subjectSelectList from '../../utils/subjectSelectList'

// Imagens e ícones
import warningIcon from '../../assets/images/icons/warning.svg'

// Estilos do componente
import './styles.css'
import weekdaySelectList from '../../utils/weekdaySelectList'
import api from '../../services/api'

function TeacherForm() {
  const history = useHistory()

  // State variables
  const [scheduleItems, setScheduleItems] = useState([{ week_day: '', from: '', to: '' }])
  const [userClassInformation, setUserClassInformation] = useState({
    name: '',
    bio: '',
    avatarUrl: '',
    whatsapp: '',
    subject: '',
    pricePerHour: '',
  })

  function addNewScheduleItem() {
    setScheduleItems([...scheduleItems, { week_day: '', from: '', to: '' }])
  }

  function setScheduleItemValue(position: number, field: string, value: string) {
    const newArray = scheduleItems.map((item, index) => {
      return index === position ? { ...item, [field]: value } : item
    })
    setScheduleItems(newArray)
    console.log(scheduleItems)
  }

  function setUserClassInformationValue(field: string, value: string) {
    setUserClassInformation({ ...userClassInformation, [field]: value })
    console.log(userClassInformation)
  }

  function handleSubmitTeacherForm(event: FormEvent) {
    event.preventDefault()
    api
      .post('/classes', { ...userClassInformation, schedule: scheduleItems })
      .then((res) => {
        alert('Classe criada com Sucesso!')
        history.push('/')
      })
      .catch(() => {
        alert('Não foi possível criar a Classe')
      })
  }

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrível que você quer dar aulas!"
        description="O primeiro passo é preencher esse formulário de inscrição"
      />

      <main>
        <form onSubmit={handleSubmitTeacherForm}>
          <fieldset>
            <legend>Seus dados</legend>
            <Input
              label="Nome Completo"
              name="name"
              value={userClassInformation.name}
              onChange={(e) => setUserClassInformationValue('name', e.target.value)}
            />
            <Input
              label="Avatar"
              name="atavarUrl"
              value={userClassInformation.avatarUrl}
              onChange={(e) => setUserClassInformationValue('avatarUrl', e.target.value)}
            />
            <Input
              label="WhatsApp"
              name="whatsapp"
              value={userClassInformation.whatsapp}
              onChange={(e) => setUserClassInformationValue('whatsapp', e.target.value)}
            />
            <TextArea
              label="Biografia"
              name="bio"
              value={userClassInformation.bio}
              onChange={(e) => setUserClassInformationValue('bio', e.target.value)}
            />
          </fieldset>

          <fieldset>
            <legend>Sobre a Aula</legend>
            <Select
              label="Matéria"
              name="subject"
              options={subjectSelectList}
              value={userClassInformation.subject}
              onChange={(e) => setUserClassInformationValue('subject', e.target.value)}
            />
            <Input
              label="Custo da sua hora/aula"
              name="pricePerHour"
              value={userClassInformation.pricePerHour}
              onChange={(e) => setUserClassInformationValue('pricePerHour', e.target.value)}
            />
          </fieldset>

          <fieldset>
            <legend>
              Horários Disponíveis
              <button type="button" onClick={addNewScheduleItem}>
                + Novo Horário
              </button>
            </legend>

            {scheduleItems.map((item, index) => {
              return (
                <div key={item.week_day + item.from + item.to} className="schedule-item">
                  <Select
                    label="Dia da Semana"
                    name="week_day"
                    value={item.week_day}
                    options={weekdaySelectList}
                    onChange={(e) => setScheduleItemValue(index, 'week_day', e.target.value)}
                  />
                  <Input
                    label="Das"
                    name="from"
                    type="time"
                    value={item.from}
                    onChange={(e) => setScheduleItemValue(index, 'from', e.target.value)}
                  />
                  <Input
                    label="Até"
                    name="to"
                    type="time"
                    value={item.to}
                    onChange={(e) => setScheduleItemValue(index, 'to', e.target.value)}
                  />
                </div>
              )
            })}
          </fieldset>

          <footer>
            <p>
              <img src={warningIcon} alt="Aviso Importante" />
              Importante! <br />
              Preencha todos os dados
            </p>
            <button type="submit">Salvar cadastro</button>
          </footer>
        </form>
      </main>
    </div>
  )
}

export default TeacherForm
