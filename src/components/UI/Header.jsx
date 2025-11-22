import { Link } from 'react-router'
import { GithubIcon } from '@/icons/Icons'
import './styles/Header.css'

const Header = () => {
  return (
    <article className = 'header-wrapper'>
      <header className = 'header-container container'>
        <Link to = '/'>
          EDA Lab
        </Link>
        
        <a href = 'https://github.com/shaitansix' target = '_blank'>
          <GithubIcon className = 'header-icon' />
        </a>
      </header>
    </article>
  )
}

export default Header