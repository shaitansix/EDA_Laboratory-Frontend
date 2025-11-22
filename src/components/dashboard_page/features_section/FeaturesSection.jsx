import Section from '@/components/UI/Section'
import Correlation from '@/components/dashboard_page/features_section/Correlation'
import Model from '@/components/dashboard_page/features_section/Model'
import { useObserver } from '@/hooks/useObserver'

const FeaturesSection = () => {
  const { elementRef: correlationRef, isVisible: isCorrelationVisible } = useObserver()
  const { elementRef: modelRef, isVisible: isModelVisible } = useObserver()

  const submenu = {
    'correlation': {
      'text': 'Matriz de correlación', 
      'isVisible': isCorrelationVisible
    },
    'model': {
      'text': 'Modelo de ML', 
      'isVisible': isModelVisible
    }
  }

  return (
    <Section submenu = {submenu}>
      <Correlation ref = {correlationRef} />
      <Model ref = {modelRef} />
    </Section>
  )
}

export default FeaturesSection