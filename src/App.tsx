import { FC } from 'react'
import { useForm } from 'react-hook-form'

import Header from './components/Header'
import InputWithLabel from './components/InputWithLabel'
import Button from './components/Button'
import { SubmitFormParams, Response } from './dtos/CreateUser'

import { api } from './services/api'

import { UserPlus } from 'react-feather'
import logoGrowth from './assets/logo.png'
import './styles/global.css'

const App: FC = () => {
  const { register, handleSubmit } = useForm()

  const handleSubmitForm = async (submitFormParams: SubmitFormParams) => {
    try {
      const { data: { data } } = await api.post<Response>('user', submitFormParams)
      alert(data.id)
    } catch {
      alert('Ocorreu um error, tente novamente!')
    }
  }

  return (
    <div className='container'>
      <img src={logoGrowth} alt='Growth tech logo'/>
      <Header />
      <main>
        <h2 className='title-secundary'>Formulário para cadastro de usuário</h2>
        <form className='form-user' onSubmit={handleSubmit(handleSubmitForm)}>
          <InputWithLabel
            name='name'
            labelAndPlaceholder='Nome completo'
            refForm={register({ required: true})}
          />

          <InputWithLabel
            name='username'
            labelAndPlaceholder='Nome de usuário'
            refForm={register({ required: true})}
          />

          <InputWithLabel
            name='email'
            labelAndPlaceholder='Email'
            type='email'
            refForm={register({ required: true})}
          />

          <InputWithLabel
            name='phone'
            labelAndPlaceholder='Número de celular'
            refForm={register({ required: true})}
          />

          <InputWithLabel
            name='street'
            labelAndPlaceholder='Nome da rua'
            refForm={register({ required: true})}
          />

          <InputWithLabel
            name='suite'
            labelAndPlaceholder='Número da casa/apartamento'
            refForm={register({ required: true})}
          />

          <InputWithLabel
            name='city'
            labelAndPlaceholder='Nome da cidade'
            refForm={register({ required: true})}
          />

          <InputWithLabel
            name='zipcode'
            labelAndPlaceholder='CEP'
            refForm={register({ required: true})}
          />

          <InputWithLabel
            name='companyName'
            labelAndPlaceholder='Nome da empresa'
            refForm={register({ required: true})}
          />

          <Button type='submit' icon={UserPlus}>
            Cadastrar
          </Button>
        </form>
      </main>
    </div>
  );
}

export default App;
