import { useState } from 'react'
import logoGrowth from './assets/logo.png'
import './styles/global.css'

function App() {
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
        <h2 className='title-secundary'>Formulário para cadastro de usuário</h2>
        <form className='form-user'>
          <label htmlFor='name'>Nome completo</label>
          <input type='text' placeholder='Nome completo' name='name' />

          <label htmlFor='username'>Nome de usuário</label>
          <input type='text' placeholder='Nome de usuário' name='username' />

          <label htmlFor='email'>Email</label>
          <input type='email' placeholder='Email' name='email' />

          <label htmlFor='phone'>Número de celular</label>
          <input type='text' placeholder='Número de celular' name='phone' />

          <label htmlFor='street'>Nome da rua</label>
          <input type='text' placeholder='Nome da rua' name='street' />

          <label htmlFor='suite'>Número da casa/apartamento</label>
          <input type='text' placeholder='Número da casa/apartamento' name='suite' />

          <label htmlFor='city'>Nome da cidade</label>
          <input type='text' placeholder='Nome da cidade' name='city' />
          
          <label htmlFor='zipcode'>CEP</label>
          <input type='text' placeholder='Nome da rua' name='zipcode' />

          <label htmlFor='companyName'>Nome da empresa</label>
          <input type='text' placeholder='Nome da empresa' name='companyName' />

          <button type='submit' className='submit-button'>
            Cadastrar
          </button>
        </form>
      </main>
    </div>
  );
}

export default App;
