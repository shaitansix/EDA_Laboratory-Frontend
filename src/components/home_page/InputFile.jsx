import { useDropzone } from 'react-dropzone'
import { UploadIcon, FileIcon } from '@/icons/Icons'
import './styles/InputFile.css'

const InputFile = ({ file, onChange }) => {
  const onDrop = (acceptedFiles) => {
    onChange(acceptedFiles)
  }
  const {getRootProps, getInputProps, isDragActive} = useDropzone({ onDrop })

  return (
    <article className = 'input_file-wrapper'>
      <div {...getRootProps(({className: isDragActive ? 'input_file-container input_file-container-active' : 'input_file-container'}))}>
        <input {...getInputProps()} />
        { file ? <>
          <FileIcon className = 'input_file-icon' />
          <span>{file.name}</span>
        </> : <>
          <UploadIcon className = 'input_file-icon' />
          <span>Haz clic para subir tu archivo .csv</span>
        </> }
      </div>
    </article>
  )
}

export default InputFile