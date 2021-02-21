import { FC } from 'react'
import Header from '../components/Header'
import logoGrowth from '../assets/logo.png'
import '../styles/global.css'

const ListPost: FC = () => {

  return (
    <div className='container'>
      <img src={logoGrowth} alt='Growth tech logo'/>
      <Header />
      <main>
        <ul>
          <li className='post-container'>
            <div className='post-header'>
              <strong>Danilo Bandeira</strong>
              <span>Fátima Salgados</span>
            </div>

            <div className='post'>
              <strong>Título do post</strong>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi aut, velit quis fuga atque nemo rerum iste ut autem blanditiis sunt labore at consectetur quod sint sequi voluptate. Magnam, ullam?</p>
            </div>
          </li>

          <li className='post-container'>
            <div className='post-header'>
              <strong>Danilo Bandeira</strong>
              <span>Fátima Salgados</span>
            </div>

            <div className='post'>
              <strong>Título do post</strong>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi aut, velit quis fuga atque nemo rerum iste ut autem blanditiis sunt labore at consectetur quod sint sequi voluptate. Magnam, ullam?</p>
            </div>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default ListPost;
