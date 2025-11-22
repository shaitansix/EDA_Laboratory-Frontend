import { createContext, useState, useContext } from 'react'
import FileMetadataContext from '@/context/FileMetadataContext'

const PageFiltersContext = createContext()

const PageFiltersProvider = ({ children }) => {
  const { fileMetadata } = useContext(FileMetadataContext)
  
  const [filters, setFilters] = useState({
    'general-information': {
      preview: { numInstances: 5 }
    }, 
    'distribution': {
      histogram: {
        attribute: fileMetadata.attributes.numeric[0], 
        bins: 24
      }
    }, 
    'correlations': {
      dispersion: {
        attribute_x: fileMetadata.attributes.numeric[0], 
        attribute_y: fileMetadata.attributes.numeric[0]
      }
    }, 
    'feature-selection': {
      correlation: {
        correlationValue: 0.7
      }, 
      model: {
        target: fileMetadata.attributes.all[0], 
        model: 'Extra Trees', 
        encode: false
      }
    }
  })

  return (
    <PageFiltersContext.Provider value = {{ filters, setFilters }}>
      {children}
    </PageFiltersContext.Provider>
  )
}

export { PageFiltersProvider }
export default PageFiltersContext