import { useState } from 'react'
import { ChevronIcon } from '@/icons/Icons'
import './styles/Accordion.css'

const Accordion = ({ className, title, children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleAccordion = () => {
    setIsOpen(!isOpen)
  }

  return (
    <article className = {`accordion-container ${className}`}>
      <div 
        className = 'accordion-header'
        onClick = {toggleAccordion}>
          <ChevronIcon className = {isOpen ? 'accordion-icon-up' : 'accordion-icon-down'} />
          <span>{title}</span>
      </div>

      <div className = {isOpen ? 'accordion-body accordion-body-open' : 'accordion-body'}>
        {children}
      </div>
    </article>
  )
}

export default Accordion