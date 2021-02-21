import { FC, useState } from 'react'
import Button from '../Button'
import MenuNavigation from '../MenuNavigation'
import { Menu } from 'react-feather'
import './style.css'

const Header: FC = () => {

  const [stateMenuButton, setStateMenuButton] = useState(false)
  
  function handleMenuButton() {
    setStateMenuButton(!stateMenuButton)
  }

  return(
    <header className='header'>
      <Button 
        type='button'
        icon={Menu}
        onClick={handleMenuButton}
      >
        Menu
      </Button>
      { stateMenuButton ? <MenuNavigation /> : null }
    </header>
  )
}

export default Header
