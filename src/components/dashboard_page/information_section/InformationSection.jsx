import Section from '@/components/UI/Section'
import Summary from '@/components/dashboard_page/information_section/Summary'
import Attributes from '@/components/dashboard_page/information_section/Attributes'
import Preview from '@/components/dashboard_page/information_section/Preview'
import Describe from '@/components/dashboard_page/information_section/Describe'
import { useObserver } from '@/hooks/useObserver'

const InformationSection = () => {
  const { elementRef: summaryRef, isVisible: isSummaryVisible } = useObserver()
  const { elementRef: attributesRef, isVisible: isAttributesVisible } = useObserver()
  const { elementRef: previewRef, isVisible: isPreviewVisible } = useObserver()
  const { elementRef: describeRef, isVisible: isDescribeVisible } = useObserver()

  const submenu = {
    'summary': {
      'text': 'Resumen del dataset', 
      'isVisible': isSummaryVisible
    },
    'attributes': {
      'text': 'Estructura de atributos', 
      'isVisible': isAttributesVisible
    },
    'preview': {
      'text': 'Vista previa de datos', 
      'isVisible': isPreviewVisible
    },
    'describe': {
      'text': 'Estadísticas descriptivas', 
      'isVisible': isDescribeVisible
    }
  }

  return (
    <Section submenu = {submenu}>
      <Summary ref = {summaryRef} />
      <Attributes ref = {attributesRef} />
      <Preview ref = {previewRef} />
      <Describe ref = {describeRef} />
    </Section>
  )
}

export default InformationSection