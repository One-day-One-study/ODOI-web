import React from 'react'
import Image from 'next/image'
import loadingGif from '@/assets/loading.gif'

const Loading = () => (
  <div>
    <Image src={loadingGif} alt="로딩중 이미지" width={28} height={28} />
  </div>
)

export default Loading
