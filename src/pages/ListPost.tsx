import { FC, useEffect, useState } from 'react'

import Header from '../components/Header'
import { Data, Post } from '../dtos/ListPost'

import api from '../services/api'

import logo from '../assets/logo.png'
import '../styles/global.css'

const ListPost: FC = () => {
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    (async () => {
      const { data: { data } } = await api.get<Data>('/post')
      
      setPosts(data)
    }
    )()
  }, [])

  return (
    <div className='container'>
      <img src={logo} alt='Growth tech logo'/>
      <Header />
      <main>
        <h2 className='title-secundary'>Listagem de Post</h2>
        <ul>
        { posts && 
            (posts.map(post => 
              (
                <li className='post-container' key={post.id}>
                  <div className='post-header'>
                    <strong>{post.user.name}</strong>
                    <span>{post.user.company.name}</span>
                  </div>

                  <div className='post'>
                    <strong>{post.title}</strong>
                    <p>{post.body}</p>
                  </div>
                </li>
              )
            ))
          }
        </ul>
      </main>
    </div>
  );
}

export default ListPost;
