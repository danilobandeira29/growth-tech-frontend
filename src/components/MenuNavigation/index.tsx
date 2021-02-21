import { FC } from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const MenuNavigation: FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>Cadastrar usuário</Link>
        </li>
        <li>
          <Link to='/createPost'>Criar post</Link>
        </li>
        <li>
          <Link to='/posts'>Listar post</Link>
        </li>
      </ul>
    </nav>
  )
}

export default MenuNavigation
