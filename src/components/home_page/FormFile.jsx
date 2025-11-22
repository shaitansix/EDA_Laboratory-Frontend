import './styles/FormFile.css'

const FormFile = ({ file, values, onChange, onClick }) => {
  return (
    <article className = 'form_file-container'>
      <div>
        <span className = 'text-strong'>Delimitador</span>
        <select 
          className = 'custom-select' 
          name = 'delimiter' 
          value = {values.delimiter} 
          onChange = {onChange}>
            <option value = ','>coma (,)</option>
            <option value = ';'>punto y coma (;)</option>
        </select>
      </div>

      <div>
        <span className = 'text-strong'>Decimal</span>
        <select 
          className = 'custom-select' 
          name = 'decimal' 
          value = {values.decimal} 
          onChange = {onChange}>
            <option value = '.'>punto (.)</option>
            <option value = ','>coma (,)</option>
        </select>
      </div>

      <button 
        className = 'custom-button' 
        disabled = {!file} 
        onClick = {onClick}>
        Cargar
      </button>
    </article>
  )
}

export default FormFile