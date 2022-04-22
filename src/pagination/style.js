import styled from 'styled-components/macro'

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  align-items: center;
  margin-top: 20px;
  font-size: 14px;

`
export const ControlText = styled.p`
  font-weight: 500;
  font-size: 14px;
  `

export const PageFlex = styled.div`
  display: flex;
  color: ${({activate})=> activate?'#6619D2': '#999CA0'} ;
  margin-right: 20px;
  margin-left: 20px;
  cursor: pointer;
`

export const PageCount = styled.div`
  display: flex;
`

export const PageDiv = styled.div`
  width: 400px;
  display: flex;
  align-items: center;
`