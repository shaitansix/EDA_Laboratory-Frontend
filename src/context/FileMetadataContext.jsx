import { createContext, useState } from 'react'

const FileMetadataContext = createContext()

const initialFileMetadata = {
  name: sessionStorage.getItem('name') || '', 
  attributes: JSON.parse(sessionStorage.getItem('attributes')) || {'all': [], 'numeric': []}, 
  delimiter: sessionStorage.getItem('delimiter') || ',', 
  decimal: sessionStorage.getItem('decimal') || '.'
}

const FileMetadataProvider = ({ children }) => {
  const [fileMetadata, setFileMetadata] = useState(initialFileMetadata)

  return (
    <FileMetadataContext.Provider value = {{ fileMetadata, setFileMetadata }}>
      {children}
    </FileMetadataContext.Provider>
  )
}

export { FileMetadataProvider }
export default FileMetadataContext