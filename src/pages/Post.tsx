import { useState } from 'react'
import logoGrowth from '../assets/logo.png'
import '../styles/global.css'

function Post() {
  const [stateMenuButton, setStateMenuButton] = useState(false)

  function handleMenuButton() {
    setStateMenuButton(!stateMenuButton)
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
        <form className='form-post'>
          <label htmlFor='userId'>Id do usuário</label>
          <input type='text' placeholder='Id do usuário' name='userId' />

          <label htmlFor='title'>Título</label>
          <input type='text' placeholder='Título' name='title' />

          <label htmlFor='body'>Conteúdo</label>
          <textarea placeholder='Conteúdo' name='body' />

          <button type='submit' className='submit-button'>
            Criar
          </button>
        </form>
      </main>
    </div>
  );
}

export default Post;
