import { FC } from 'react'
import './style.css'

const MenuNavigation: FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href='/'>Cadastrar usuário</a>
        </li>
        <li>
          <a href='/createPost'>Criar post</a>
        </li>
        <li>
          <a href='/posts'>Listar post</a>
        </li>
      </ul>
    </nav>
  )
}

export default MenuNavigation
