import React, { useState } from 'react'
import { ModalWrapper, SectionTitle, Title } from './ModalStyldComponents'
import { CategoryButton } from '@/app/page'
import { CATEGORIES } from '@/constants/categories'
import styled, { css } from 'styled-components'
import TextArea from '../common/TextArea'
import { COLORS } from '@/styles/colors'
import useResponsiveLayout from '@/hooks/useResponsiveLayout'

const RegisterQuestionModal = ({ closeModal }: { closeModal: () => void }) => {
  const { isMobile } = useResponsiveLayout()

  const [categoryId, setCategoryId] = useState(0)
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')

  return (
    <ModalWrapper width="80%">
      <Title>카테고리 선택 후 문제를 등록해주세요.</Title>
      <ButtonWrapper>
        {CATEGORIES.map((category: { id: number; value: string }) => (
          <CategoryButton
            key={category.id}
            clicked={(categoryId === category.id).toString()}
            onClick={() => setCategoryId(category.id)}
          >
            {category.value}
          </CategoryButton>
        ))}
      </ButtonWrapper>
      <SectionWrapper>
        <SectionTitle>문제</SectionTitle>
        <TextArea
          value={question}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setQuestion(e.target.value)
          }
        />
      </SectionWrapper>
      <SectionWrapper>
        <SectionTitle>정답</SectionTitle>
        <TextArea
          value={answer}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setAnswer(e.target.value)
          }
        />
      </SectionWrapper>
      <SubmitButtonWrapper>
        <SubmitButton
          mobile={isMobile.toString()}
          submitType="cancel"
          onClick={closeModal}
        >
          취소하기
        </SubmitButton>
        <SubmitButton
          mobile={isMobile.toString()}
          submitType="register"
          disabled={!categoryId || !question || !answer}
        >
          등록하기
        </SubmitButton>
      </SubmitButtonWrapper>
    </ModalWrapper>
  )
}

export default RegisterQuestionModal

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  gap: 20px;

  padding: 10px;

  @media (max-width: 767px) {
    gap: 12px;
  }
`

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 8px;
`
const SubmitButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  gap: 8px;
  margin-top: 8px;
`
const SubmitButton = styled.button<{ mobile: string; submitType: string }>`
  padding: 8px;
  border-radius: 4px;
  background: ${COLORS.BLUE_100};

  color: ${COLORS.WHITE};

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  &:disabled {
    background-color: #dbdce2;
  }

  ${({ mobile }) =>
    mobile === 'true' &&
    css`
      padding: 6px;
      font-size: 12px;
    `}

  ${({ submitType }) =>
    submitType === 'cancel' &&
    css`
      border: 1px solid ${COLORS.BLUE_100};
      color: ${COLORS.BLUE_200};
      background-color: ${COLORS.WHITE};
    `}
`
