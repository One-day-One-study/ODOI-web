import React from 'react'
import styled from 'styled-components'
import COLORS from '@/styles/colors'

const TextArea = ({
  value,
  onChange,
}: {
  value: string
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}) => <TextAreaContainer value={value} onChange={onChange} />

export default TextArea

const TextAreaContainer = styled.textarea<{ height?: number }>`
  width: 100%;
  height: ${({ height }) => height}px;
  padding: 14px 15px;

  outline: none;
  color: #000;

  border-radius: 8px;
  border: 1px solid #dbdce2;
  background-color: ${COLORS.WHITE};
  resize: none;
`
