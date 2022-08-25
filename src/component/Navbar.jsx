import { Button, HStack, Icon, Link } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

import './Navbar.css'
import { useContext } from 'react'
import { AuthContext } from '../context/AppContext'


export default function Navbar(){
    const auth=useContext(AuthContext)
    return(
        <div className='navbar'>
        <div className='navlogo'><img src="https://www.pluralsight.com/etc.clientlibs/pluralsight/clientlibs/clientlib-main/resources/images/global/header/PS_logo.png" alt="" /></div>
        <div className='navmid'>
            <Link to='/'  position='relative' top='25%'>Platform</Link>
            <Link to='/login'  position='relative' top='25%'>Product</Link>
            <Link to='/'  position='relative' top='25%'>Resource</Link>
            <Link to='/' position='relative' top='25%'>For Individual</Link>
        </div>
        <div className='mid2'></div>
        <div className='navlast'>
        <HStack><Icon as={SearchIcon}  w={6} h={6} /></HStack>
      {auth.token?<Link to='/login' onClick={auth.handleLogout}  position='relative' top='10px'>Sign out</Link>: <Link to='/'  position='relative' top='10px'>Sign in</Link>}
        <Button  variant='outline'>Try For Free</Button>
        </div>
        </div>
    )
}