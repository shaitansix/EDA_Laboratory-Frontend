import { useState, useContext, Children } from 'react'
import { useNavigate } from 'react-router'
import InputFile from '@/components/home_page/InputFile'
import FormFile from '@/components/home_page/FormFile'
import FileMetadataContext from '@/context/FileMetadataContext'
import { uploadFile } from '@/services/file.js'
import './styles/HomePage.css'

const HomePage = ({ setFileLoaded }) => {
  const { fileMetadata, setFileMetadata } = useContext(FileMetadataContext)

  const [file, setFile] = useState(null)
  const [params, setParams] = useState({
    delimiter: fileMetadata.delimiter, 
    decimal: fileMetadata.decimal
  })

  const navigate = useNavigate()

  const handleFile = (acceptedFiles) => {
    setFile(acceptedFiles[0])
  }
  
  const handleParams = (event) => {
    const { name, value } = event.target
    setParams({
      ...params, 
      [name]: value
    })
  }

  const handleUpload = async () => {
    if (file) {
      const formData = new FormData()
      formData.append('file', file)
      formData.append('delimiter', params.delimiter)
      formData.append('decimal', params.decimal)
      
      const res = await uploadFile(formData)
      if (res.status === 200) {
        if (res.data?.state === 'Success') {
          setFileMetadata(res.data.data)
          sessionStorage.setItem('name', res.data.data.name)
          sessionStorage.setItem('attributes', JSON.stringify(res.data.data.attributes))
          sessionStorage.setItem('delimiter', res.data.data.delimiter)
          sessionStorage.setItem('decimal', res.data.data.decimal)
          setFileLoaded(true)
        }
      }
    }
  }

  const handleDashboardNavigate = () => {
    navigate('/dashboard')
  }

  return (
    <section className = 'home_page-wrapper'>
      <div className = 'home_page-container'>
        <div className = 'home_page-intro'>
          <span className = 'text-title'>
            Bienvenido a EDA Laboratory
          </span>
          <article className = 'home_page-guide'>
            <span className = 'text-subtitle'>
              Guia de uso
            </span>
            <div>
              <StepItem title = '1. Sube tu archivo .csv'>
                <span>• Haz clic en el recuadro para seleccionar tu archivo .csv o arrástralo allí.</span>
              </StepItem>
              
              <StepItem title = '2. Configura y carga tu archivo'>
                <span>• Selecciona el delimitador de tu archivo (coma o punto y coma).</span>
                <span>• Selecciona el separador decimal (punto o coma).</span>
                <span>• Haz clic en Cargar.</span>
              </StepItem>
              
              <StepItem title = '3. Accede al Dashboard'>
                <span>• Verás el nombre del archivo cargado exitosamente y podrás continuar haciendo clic en "Ir al Dashboard".</span>
              </StepItem>
            </div>
          </article>
        </div>

        <div>
          <InputFile file = {file} onChange = {handleFile} />
          <FormFile 
            file = {file} 
            values = {params} 
            onChange = {handleParams} 
            onClick = {handleUpload} />
        </div>

        <div>
          { fileMetadata.name && <>
            <span>
              <span className = 'text-strong'>{fileMetadata.name}</span> cargado correctamente!
            </span>
            <button 
              className = 'custom-button' 
              onClick = {handleDashboardNavigate}>
                Ir al Dashboard
            </button>
          </> }
        </div>
      </div>
    </section>
  )
}

const StepItem = ({ title, children }) => {
  return (
    <div className = 'step_item-container'>
      <span className = 'text-strong'>
        {title}
      </span>
      <span className = 'step_item-list'>
        {children}
      </span>
    </div>
  )
}

export default HomePage