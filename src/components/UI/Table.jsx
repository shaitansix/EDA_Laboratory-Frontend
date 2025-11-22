import { useState } from 'react'
import { 
  getCoreRowModel, 
  getSortedRowModel, 
  flexRender, 
  useReactTable 
} from '@tanstack/react-table'
import './styles/Table.css'

const Table = ({ columns, data }) => {
  const [sorting, setSorting] = useState([])

  const table = useReactTable({
    data, 
    columns, 
    getCoreRowModel: getCoreRowModel(), 
    getSortedRowModel: getSortedRowModel(), 
    state: {
      sorting
    }, 
    onSortingChange: setSorting
  })

  return (
    <table className = 'table'>
      <thead>
        { table.getHeaderGroups().map(headerGroup => (
          <tr key = {headerGroup.id}>
            { headerGroup.headers.map(header => (
              <th key = {header.id} onClick = {header.column.getToggleSortingHandler()}>
                <div>
                  <span>
                    { flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    ) }
                  </span>
                  <span className = 'table-sort'>
                    { { 
                      asc: '▲', 
                      desc: '▼'
                    }[header.column.getIsSorted()] }
                  </span>
                </div>
              </th>
            )) }
          </tr>
        ))}
      </thead>

      <tbody>
        { table.getRowModel().rows.map(row => (
          <tr key = {row.id}>
            { row.getVisibleCells().map(cell => (
              <td key = {cell.id}>
                { flexRender(cell.column.columnDef.cell, cell.getContext()) }
              </td>
            )) }
          </tr>
        )) }
      </tbody>
    </table>
  )
}

export default Table