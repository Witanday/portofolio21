import React , {Component}from 'react'
import {Link} from 'react-router-dom';
import {Menu, Image} from 'semantic-ui-react'
import './header.styles.scss'

class NavBar extends Component{
      render(){

    
        return (
            <Menu className='main-menu'>
            <Menu.Menu  className='menu-left'>
              <Menu.Item>
              <Link to='/' className='menu-logo'>dd</Link>
              <Link to='/' className='navLink'>WitandayDev</Link>
              </Menu.Item>
            </Menu.Menu>

            <Menu.Menu position='right' className='menu-right'>
            <Menu.Item><Link to='/' className='navLink'>Home</Link></Menu.Item>
            <Menu.Item><Link to='/projects' className='navLink'>Projects</Link></Menu.Item>
            <Menu.Item><Link to='/about' className='navLink'>Abouts</Link></Menu.Item>
            <Menu.Item> <Link to='/contact' className='navLink'>Contact</Link></Menu.Item>
            </Menu.Menu>
            </Menu>
        )
    }
  }

    export default NavBar;
