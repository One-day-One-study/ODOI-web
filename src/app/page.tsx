'use client';

import styled, { css } from 'styled-components';
import { useState } from 'react';

import Header from '@/components/mainPage/Header';
import Logo from '@/components/mainPage/Logo';
import Spacing from '@/components/common/Spacing';
import RegisterButton from '@/components/mainPage/RegisterButton';
import { CATEGORIES } from '@/constants/categories';
import { COLORS } from '@/styles/colors';
import useResponsiveLayout from '@/hooks/useResponsiveLayout';

export default function MainPage() {
  const { isMobile } = useResponsiveLayout();

  const [categories, setCategories] = useState<string[]>([]);

  const handleClickCategory = (category: string) => {
    if (categories.includes(category)) {
      setCategories(categories.filter((el) => el !== category));
      return;
    }
    setCategories((prev) => [...prev, category]);
  };

  return (
    <MainPageContainer>
      {!isMobile && <Header />}
      <Logo />
      <Spacing size={115} />
      {isMobile && (
        <div className="explainText">
          오늘 풀어볼 문제의 카테고리를 선택해주세요.
        </div>
      )}
      <ButtonWrapper>
        {CATEGORIES.map((category) => (
          <CategoryButton
            key={category}
            clicked={categories.includes(category).toString()}
            onClick={() => handleClickCategory(category)}
          >
            {category}
          </CategoryButton>
        ))}
      </ButtonWrapper>
      <Spacing size={98} />
      <Button>랜덤 문제 뽑기</Button>
      <RegisterButton type={isMobile ? 'mobile' : 'desktop'} />
    </MainPageContainer>
  );
}

const MainPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .explainText {
    color: ${COLORS.BLUE_100};
    font-family: 'Pretendard';
    font-size: 18px;
    font-weight: 600;
    line-height: normal;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;

  width: 35%;

  @media (max-width: 767px) {
    gap: 12px;
    width: 70%;
    margin-top: 16px;
  }
`;

const CategoryButton = styled.button<{ clicked: string }>`
  padding: 12px 14px;
  border-radius: 8px;

  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  font-family: 'Pretendard';

  border: 1px solid ${COLORS.BLUE_100};
  color: ${COLORS.BLUE_100};

  ${({ clicked }) =>
    clicked === 'true' &&
    css`
      background-color: ${COLORS.BLUE_100};
      color: ${COLORS.WHITE};
      border: none;
    `};

  @media (max-width: 767px) {
    padding: 7px 12px;
    font-size: 12px;
  }
`;

const Button = styled.button`
  padding: 30px 47px;

  border-radius: 12px;
  background: ${COLORS.BLUE_200};

  color: ${COLORS.WHITE};
  font-family: 'Pretendard';
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  @media (max-width: 767px) {
    padding: 20px 32px;
    font-size: 24px;
    margin-bottom: 18px;
  }
`;
