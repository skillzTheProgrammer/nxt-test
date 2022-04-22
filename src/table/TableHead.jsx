import React from 'react'
import { TableHeadContainer, TableRow, Th } from './style'

export default function TableHead() {
  return (
    <TableHeadContainer>
      <TableRow>
        <Th>S/N</Th>
        <Th>Name</Th>
        <Th>Climate</Th>
        <Th>Rotation Period</Th>
        <Th>Population</Th>
        <Th>Terrain</Th>
        <Th>Created Date</Th>
      </TableRow>
    </TableHeadContainer>
  )
}
