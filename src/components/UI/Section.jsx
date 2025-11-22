import Accordion from '@/components/UI/Accordion'
import CustomLink from '@/components/UI/CustomLink'
import './styles/Section.css'

const Section = ({ submenu, children }) => {
  return (
    <article className = 'section-container'>
      <div className = 'section-body'>
        <div className = 'section-content'>
          {children}
        </div>

        <div className = 'section-submenu'>
          <Accordion 
            className = 'section-submenu-accordion'
            title = 'En esta pagina'>
              <aside className = 'section-submenu-list'>
                { Object.keys(submenu).map((key, idx) => (
                  <CustomLink 
                    key = {`link-submenu-${idx}`} 
                    to = {`#${key}`} 
                    active = {submenu[key]['isVisible']}>
                      {submenu[key]['text']}
                  </CustomLink>
                )) }
              </aside>
          </Accordion>
        </div>
      </div>

      <footer className = 'section-footer'>
        <span>&copy; 2025 | Cristian Barrantes</span>
        <span>•</span>
        <span>Hecho con React JS</span>
      </footer>
    </article>
  )
}

export default Section