import Section from '@/components/UI/Section'
import Skewness from '@/components/dashboard_page/distribution_section/Skewness'
import Histogram from '@/components/dashboard_page/distribution_section/Histogram'
import { useObserver } from '@/hooks/useObserver'

const DistributionSection = () => {
  const { elementRef: skewnessRef, isVisible: isSkewnessVisible } = useObserver()
  const { elementRef: histogramRef, isVisible: isHistogramVisible } = useObserver()

  const submenu = {
    'skewness': {
      'text': 'Medida de asimetría', 
      'isVisible': isSkewnessVisible
    },
    'histogram': {
      'text': 'Histograma con densidad', 
      'isVisible': isHistogramVisible
    }
  }

  return (
    <Section submenu = {submenu}>
      <Skewness ref = {skewnessRef} />
      <Histogram ref = {histogramRef} />
    </Section>
  )
}

export default DistributionSection