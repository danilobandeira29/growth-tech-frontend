import { FC, useState } from 'react'
import { useForm } from 'react-hook-form'
import { SubmitFormParams } from '../dtos/CreatePost'
import logoGrowth from '../assets/logo.png'
import '../styles/global.css'

const Post: FC = () => {
  const [stateMenuButton, setStateMenuButton] = useState(false)
  
  const { register, handleSubmit } = useForm()

  function handleMenuButton() {
    setStateMenuButton(!stateMenuButton)
  }

  const handleSubmitForm = async (data: SubmitFormParams) => {
    console.log(data)
  }

  return (
    <div className='container'>
      <img src={logoGrowth} alt='Growth tech logo'/>
      <header className='header'>
        <button type='button' className='menu-button' onClick={handleMenuButton}>
          Menu
          <div className='menu-icon'>
            <span className='first-bar'></span>
            <span className='second-bar'></span>
            <span className='third-bar'></span>
          </div>
        </button>
        {stateMenuButton ? (<nav>
          <ul>
            <li>
              <a href='/user'>Cadastrar usuário</a>
            </li>
            <li>
              <a href='/user/post'>Criar post</a>
            </li>
            <li>
              <a href='/allPost'>Listar post</a>
            </li>
          </ul>
        </nav>) : null}
      </header>
      <main>
        <h2 className='title-secundary'>Criar post</h2>
        <form className='form-post' onSubmit={handleSubmit(handleSubmitForm)}>
          <label htmlFor='userId'>Id de usuário</label>
          <input
            type='text'
            placeholder='Id do usuário'
            name='userId'
            ref={register({ required: true})}
          />

          <label htmlFor='title'>Título</label>
          <input
            type='text'
            placeholder='Título'
            name='title'
            ref={register({ required: true})}
          />

          <label htmlFor='body'>Conteúdo</label>
          <textarea
            placeholder='Conteúdo'
            name='body'
            ref={register({ required: true})}
          />

          <button type='submit' className='submit-button'>
            Criar
          </button>
        </form>
      </main>
    </div>
  );
}

export default Post;
