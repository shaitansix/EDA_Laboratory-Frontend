import Section from '@/components/UI/Section'
import Matrix from '@/components/dashboard_page/correlation_section/Matrix'
import Dispersion from '@/components/dashboard_page/correlation_section/Dispersion'
import { useObserver } from '@/hooks/useObserver'

const CorrelationSection = () => {
  const { elementRef: matrixRef, isVisible: isMatrixVisible } = useObserver()
  const { elementRef: dispersionRef, isVisible: isDispersionVisible } = useObserver()
  
  const submenu = {
    'matrix': {
      'text': 'Matriz de correlaciones', 
      'isVisible': isMatrixVisible
    },
    'dispersion': {
      'text': 'Gráfico de dispersión', 
      'isVisible': isDispersionVisible
    }
  }

  return (
    <Section submenu = {submenu}>
      <Matrix ref = {matrixRef} />
      <Dispersion ref = {dispersionRef} />
    </Section>
  )
}

export default CorrelationSection