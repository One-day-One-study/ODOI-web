'use client'

import { COLORS } from '@/styles/colors'
import React from 'react'
import styled from 'styled-components'

const Logo = () => {
  return <LogoWrapper>ODOI</LogoWrapper>
}

export default Logo

const LogoWrapper = styled.div`
  color: ${COLORS.BLUE_200};
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  font-family: 'Righteous';
`
