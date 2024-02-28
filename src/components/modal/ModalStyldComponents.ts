import COLORS from '@/styles/colors'
import styled from 'styled-components'

export const ModalWrapper = styled.div<{ width?: string }>`
  display: flex;
  flex-direction: column;

  width: ${({ width }) => width || ''};
  padding: 20px;
  background-color: ${COLORS.WHITE};
  border-radius: 8px;
`
export const Title = styled.div`
  width: 100%;
  padding-bottom: 10px;
  border-bottom: 1px solid lightgray;
`
export const SectionTitle = styled.div``
