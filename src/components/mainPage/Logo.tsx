'use client';

import { COLORS } from '@/styles/colors';
import React from 'react';
import styled from 'styled-components';

const Logo = () => {
  return (
    <LogoWrapper>
      ODOI <div className="subText">One day, One interview</div>
    </LogoWrapper>
  );
};

export default Logo;

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  color: ${COLORS.BLUE_200};
  font-size: 160px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  font-family: 'Righteous';

  .subText {
    color: ${COLORS.BLUE_100};
    font-size: 40px;
  }

  @media (max-width: 767px) {
    margin-top: 60px;
    font-size: 80px;
    .subText {
      font-size: 20px;
    }
  }
`;
