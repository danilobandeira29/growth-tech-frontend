import { FC } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'
import './styles/global.css'

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
