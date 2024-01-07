'use client';

import { COLORS } from '@/styles/colors';
import React from 'react';
import styled, { css } from 'styled-components';
import Icon from '../common/Icon';

const RegisterButton = ({ type }: { type: 'mobile' | 'desktop' }) => {
  return (
    <RegisterButtonWrapper isMobile={(type === 'mobile').toString()}>
      {type === 'mobile' ? (
        '문제 등록하기'
      ) : (
        <Icon icon="PlusButton" width={48} height={48} />
      )}
    </RegisterButtonWrapper>
  );
};

export default RegisterButton;

const RegisterButtonWrapper = styled.button<{ isMobile: string }>`
  ${({ isMobile }) =>
    isMobile === 'true' &&
    css`
      padding: 20px 32px;

      border-radius: 12px;
      background: ${COLORS.BLUE_100};

      color: ${COLORS.WHITE};
      font-family: 'Pretendard';
      font-size: 24px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    `}

  ${({ isMobile }) =>
    isMobile === 'false' &&
    css`
      position: fixed;
      right: 12px;
      bottom: 12px;
      z-index: 1000000;
    `}
`;