import './styles/SubSection.css'

const SubSection = ({ ref, id, title, description, children }) => {
  return (
    <article 
      ref = {ref} 
      id = {id} 
      className = 'subsection-container'>
        <div className = 'subsection-intro'>
          <span className = 'text-title'>
            {title}
          </span>
          <span>
            {description}
          </span>
        </div>
        <div className = 'subsection-body'>
          {children}
        </div>
    </article>
  )
}

export default SubSection