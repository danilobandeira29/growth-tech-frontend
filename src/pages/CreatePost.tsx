import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { SubmitFormParams } from '../dtos/CreatePost'
import InputWithLabel from '../components/InputWithLabel'
import Button from '../components/Button'
import Header from '../components/Header'
import { MessageSquare } from 'react-feather'
import logoGrowth from '../assets/logo.png'
import '../styles/global.css'

const Post: FC = () => {
  const { register, handleSubmit } = useForm()

  const handleSubmitForm = async (data: SubmitFormParams) => {
    console.log(data)
  }

  return (
    <div className='container'>
      <img src={logoGrowth} alt='Growth tech logo'/>
      <Header />
      <main>
        <h2 className='title-secundary'>Criar post</h2>
        <form className='form-post' onSubmit={handleSubmit(handleSubmitForm)}>
          <InputWithLabel
            name='userId'
            labelAndPlaceholder='Id do usuário'
            type='text'
            refForm={register({ required: true})}
          />

          <InputWithLabel
            name='title'
            labelAndPlaceholder='Título do post'
            type='text'
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
