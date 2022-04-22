import React from 'react'
import { usePaginationContext } from '../pagination/PaginationContext'
import { MainTable } from './style'
import TableBody from './TableBody'
import TableHead from './TableHead'

export default function Table() {
  const {pageObj} = usePaginationContext()
  return (
    <MainTable>
      <TableHead />
      <TableBody data={pageObj.paginatedData} />
    </MainTable>
  )
}
