import { FC } from 'react'
import './style.css'

const MenuNavigation: FC = () => {
  return (
    <nav>
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
    </nav>
  )
}

export default MenuNavigation
