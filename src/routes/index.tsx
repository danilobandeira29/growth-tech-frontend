import { FC } from 'react'
import { Switch, Route } from 'react-router-dom'
import CreateUser from '../pages/CreateUser'
import CreatePost from '../pages/CreatePost'
import ListPost from '../pages/ListPost'

const Routes: FC = () => {
  return (
    <Switch>
      <Route path='/' exact component={CreateUser} />
      <Route path='/createPost' component={CreatePost} />
      <Route path='/posts' component={ListPost} />
    </Switch>
  )
}

export default Routes
