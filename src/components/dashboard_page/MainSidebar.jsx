import { NavLink, useLocation } from 'react-router'
import Accordion from '@/components/UI/Accordion'
import './styles/MainSidebar.css'

const MainSidebar = ({ menu }) => {
  const { pathname } = useLocation()

  const getTitle = (path) => {
    const url = path.split('/')
    return menu[url[url.length - 1]]
  }

  return (
    <Accordion 
      className = 'main_sidebar-accordion'
      title = {getTitle(pathname)}>
        <nav className = 'main_sidebar-container'>
          { Object.keys(menu).map((key, idx) => (
            <NavLink 
              key = {`link-menu-${idx}`} 
              className = {({ isActive }) => isActive ? 'main_sidebar-link main_sidebar-link-active' : 'main_sidebar-link'}
              to = {`/dashboard/${key}`}>
                { menu[key] }
            </NavLink>
          )) }
        </nav>
    </Accordion>
  )
}

export default MainSidebar