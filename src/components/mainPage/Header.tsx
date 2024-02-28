'use client'

import React from 'react'
import styled from 'styled-components'
import COLORS from '@/styles/colors'

const Header = () => <HeaderWrapper>ODOI</HeaderWrapper>

export default Header

const HeaderWrapper = styled.div`
  width: 100%;
  padding: 12px 26px;

  color: ${COLORS.BLUE_200};
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  font-family: 'Righteous';
`
