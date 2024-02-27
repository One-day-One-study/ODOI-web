'use client'

import { useState } from 'react'
import styled, { css } from 'styled-components'
import { useRouter, useSearchParams } from 'next/navigation'

import Header from '@/components/mainPage/Header'
import Logo from '@/components/mainPage/Logo'
import Spacing from '@/components/common/Spacing'
import RegisterButton from '@/components/mainPage/RegisterButton'
import { CATEGORIES } from '@/constants/categories'
import { COLORS } from '@/styles/colors'
import useResponsiveLayout from '@/hooks/useResponsiveLayout'
import useModal from '@/hooks/useModal'
import Modal from '@/components/common/Modal'
import RegisterQuestionModal from '@/components/modal/RegisterQuestionModal'

export default function MainPage() {
  const { isShowModal, openModal, closeModal } = useModal()
  const { isMobile } = useResponsiveLayout()
  const searchParams = useSearchParams()
  const router = useRouter()

  const [categories, setCategories] = useState<number[]>([])

  const handleClickCategory = (category: number) => {
    if (categories.includes(category)) {
      setCategories(categories.filter((el) => el !== category))
      return
    }
    setCategories((prev) => [...prev, category])
  }

  const handleClickInterview = () => {
    const params = new URLSearchParams(searchParams)
    if (categories) {
      params.set('id', String(categories[0]))
    } else {
      params.delete('id')
    }
    router.push(`/interview?${params.toString()}`)
  }

  const handleClickRegisterQuestion = () => {
    openModal()
  }

  return (
    <MainPageContainer>
      {!isMobile && <Header />}
      <Logo />
      <Spacing size={115} />
      <div className="explainText">
        오늘 풀어볼 문제의 카테고리를 선택해주세요.
      </div>
      <ButtonWrapper>
        {CATEGORIES.map((category: { id: number; value: string }) => (
          <CategoryButton
            key={category.id}
            clicked={(categories.indexOf(category.id) !== -1).toString()}
            onClick={() => handleClickCategory(category.id)}
          >
            {category.value}
          </CategoryButton>
        ))}
      </ButtonWrapper>
      <Spacing size={98} />
      <Button onClick={handleClickInterview}>랜덤 문제 뽑기</Button>
      <RegisterButton
        type={isMobile ? 'mobile' : 'desktop'}
        onClick={handleClickRegisterQuestion}
      />

      {isShowModal && (
        <Modal isVisible={isShowModal} closeModal={closeModal}>
          <RegisterQuestionModal closeModal={closeModal} />
        </Modal>
      )}
    </MainPageContainer>
  )
}

const MainPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .explainText {
    margin-bottom: 20px;

    color: ${COLORS.BLUE_100};
    font-family: 'Pretendard';
    font-size: 22px;
    font-weight: 600;
    line-height: normal;
    @media (max-width: 767px) {
      margin-bottom: 16px;
      font-size: 18px;
    }
  }
`

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
  }
`

export const CategoryButton = styled.button<{ clicked: string }>`
  padding: 8px 16px;
  border-radius: 4px;

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
    padding: 8px;
    font-size: 12px;
  }
`

const Button = styled.button`
  padding: 24px 48px;

  border-radius: 12px;
  background: ${COLORS.BLUE_200};

  color: ${COLORS.WHITE};
  font-family: 'Pretendard';
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  @media (max-width: 767px) {
    padding: 24px 32px;
    font-size: 24px;
    margin-bottom: 18px;
  }
`
