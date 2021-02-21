import { FC } from 'react'
import { useForm } from 'react-hook-form'

import InputWithLabel from '../components/InputWithLabel'
import Button from '../components/Button'
import Header from '../components/Header'
import { SubmitFormParams } from '../dtos/CreatePost'

import api from '../services/api'

import { MessageSquare } from 'react-feather'
import logo from '../assets/logo.png'
import '../styles/global.css'

const Post: FC = () => {
  const { register, handleSubmit } = useForm()

  const handleSubmitForm = async (submitFormParams: SubmitFormParams) => {
    try {
      console.log(submitFormParams)
      await api.post(`user/${submitFormParams.userId}/post`, submitFormParams)
      alert('Post criado com sucesso!')
    } catch {
      alert('Ocorreu um error, tente novamente!')
    }
  }

  return (
    <div className='container'>
      <img src={logo} alt='Growth tech logo'/>
      <Header />
      <main>
        <h2 className='title-secundary'>Criar post</h2>
        <form className='form-post' onSubmit={handleSubmit(handleSubmitForm)}>
          <InputWithLabel
            name='userId'
            labelAndPlaceholder='Id do usuário'
            refForm={register({ required: true})}
          />

          <InputWithLabel
            name='title'
            labelAndPlaceholder='Título do post'
            refForm={register({ required: true})}
          />

          <label htmlFor='body'>Conteúdo</label>
          <textarea
            placeholder='Conteúdo'
            name='body'
            ref={register({ required: true})}
          />

          <Button type='submit' icon={MessageSquare}>
            Criar
          </Button>
        </form>
      </main>
    </div>
  );
}

export default Post;
