import { createColumnHelper } from '@tanstack/react-table'

export const getStructure = (data) => {
  const element = data[0]
  const structure = {}

  if (element) {
    Object.keys(element).forEach(key => {
      const type = typeof element[key]
      structure[`${key}:${type}`] = `${key[0].toUpperCase()}${key.slice(1)}`
    })
  }

  return structure
}

export const createColumns = (data) => {
  const structure = getStructure(data)
  const columnHelper = createColumnHelper()

  const columns = Object.keys(structure).map(key => {
    const [col, type] = key.split(':')
    
    return columnHelper.accessor(col, {
      cell: info => type === 'number' ? info.renderValue() : info.getValue(), 
      header: structure[key]
    })
  })

  return columns
}