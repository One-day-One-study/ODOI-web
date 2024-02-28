'use client'

import React, { useState } from 'react'
import styled from 'styled-components'
import Spacing from '@/components/common/Spacing'
import Logo from '@/components/interviewPage/Logo'
import INTERVIEW from '@/constants/interview'
import COLORS from '@/styles/colors'
import { useSearchParams } from 'next/navigation'

const InterviewPage = () => {
  const searchParams = useSearchParams()
  const interview = INTERVIEW.find(
    (el) => el.category[0] === Number(searchParams.get('id')),
  )
  const [isShowAnswer, setIsShowAnswer] = useState(false)

  return (
    <PageContainer>
      <Logo />
      <Spacing size={20} />
      <InterviewContainer>
        <TextBox>{interview?.question}</TextBox>
        <ToggleLine>
          <ToggleButton
            onClick={() => setIsShowAnswer((prev) => !prev)}
            isshowanswer={String(isShowAnswer)}
          >
            {isShowAnswer ? '정답 닫기' : '정답 보기'}
          </ToggleButton>
        </ToggleLine>
        {isShowAnswer && <TextBox>{interview?.answer}</TextBox>}
      </InterviewContainer>
    </PageContainer>
  )
}

export default InterviewPage

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
  padding: 20px;
`

const InterviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  height: 100%;
`

const TextBox = styled.div`
  padding: 16px;
  height: 45%;
  border-radius: 8px;
  background-color: ${COLORS.PINK_100};
  white-space: pre-line;
`

const ToggleLine = styled.div`
  position: relative;
  height: 2px;
  background-color: ${COLORS.BLUE_200};

  margin: 16px 0;
`

const ToggleButton = styled.button<{ isshowanswer: string }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 8px;
  background-color: ${({ isshowanswer }) =>
    isshowanswer === 'true' ? COLORS.BLUE_200 : COLORS.WHITE};
  border: ${({ isshowanswer }) =>
    isshowanswer === 'true' ? 'none' : `1px solid ${COLORS.BLUE_200}`};
  border-radius: 16px;
  color: ${({ isshowanswer }) =>
    isshowanswer === 'true' ? COLORS.WHITE : COLORS.BLUE_200};
`
