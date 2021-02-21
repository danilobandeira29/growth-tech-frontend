import { FC, useState } from 'react'
import { useForm } from 'react-hook-form'
import { SubmitFormParams } from './dtos/CreateUser'
import logoGrowth from './assets/logo.png'
import './styles/global.css'

const App: FC = () => {
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
        <h2 className='title-secundary'>Formulário para cadastro de usuário</h2>
        <form className='form-user' onSubmit={handleSubmit(handleSubmitForm)}>
          <label htmlFor='name'>Nome completo</label>
          <input 
            type='text' 
            placeholder='Nome completo' 
            name='name'
            ref={register({ required: true })}
          />

          <label htmlFor='username'>Nome de usuário</label>
          <input 
            type='text' 
            placeholder='Nome de usuário' 
            name='username'
            ref={register({ required: true })} 
          />

          <label htmlFor='email'>Email</label>
          <input 
            type='email' 
            placeholder='Email' 
            name='email'
            ref={register({ required: true })}
          />

          <label htmlFor='phone'>Número de celular</label>
          <input 
            type='text' 
            placeholder='Número de celular' 
            name='phone'
            ref={register({ required: true })}
          />

          <label htmlFor='street'>Nome da rua</label>
          <input
            type='text'
            placeholder='Nome da rua'
            name='street'
            ref={register({ required: true })}
          />

          <label htmlFor='suite'>Número da casa/apartamento</label>
          <input
            type='text'
            placeholder='Número da casa/apartamento'
            name='suite'
            ref={register({ required: true })}
          />

          <label htmlFor='city'>Nome da cidade</label>
          <input
            type='text'
            placeholder='Nome da cidade'
            name='city'
            ref={register({ required: true })}
          />
          
          <label htmlFor='zipcode'>CEP</label>
          <input
            type='text'
            placeholder='Nome da rua'
            name='zipcode'
            ref={register({ required: true })}
          />

          <label htmlFor='companyName'>Nome da empresa</label>
          <input
            type='text'
            placeholder='Nome da empresa'
            name='companyName'
            ref={register({ required: true })}
          />

          <button type='submit' className='submit-button'>
            Cadastrar
          </button>
        </form>
      </main>
    </div>
  );
}

export default App;
