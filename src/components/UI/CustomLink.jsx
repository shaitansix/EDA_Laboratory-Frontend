import './styles/CustomLink.css'

const CustomLink = ({ to, active = false, children }) => {  
  return (
    <a 
      className = {`custom_link ${active ? 'custom_link-active' : ''}`}
      href = {to}>
        {children}
    </a>
  )
}

export default CustomLink