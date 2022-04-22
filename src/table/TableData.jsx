import { usePaginationContext } from 'pagination/PaginationContext'
import React from 'react'
import { TableRow, Td } from './style'

export default function TableData({sn, climate, name, rotation_period, population, terrain, created }) {
  const {pageObj} = usePaginationContext()
  const {currentPage, numberPerPage} = pageObj
  return (
    <TableRow>
      <Td>{currentPage === 1? sn : (numberPerPage * (currentPage - 1)) + sn}</Td>
      <Td>{name}</Td>
      <Td>{climate}</Td>
      <Td>{rotation_period}</Td>
      <Td>{population}</Td>
      <Td>{terrain}</Td>
      <Td>{created}</Td>
    </TableRow>
  )
}
