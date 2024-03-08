const INTERVIEW = [
  {
    id: 1,
    category: [2],
    question: '자바스크립트 엔진이 코드를 실행하는 과정',
    answer: `- 소스코드를 파싱하여 Abstract Syntax Tree로 변환 (추상적인 구문 트리) 

- 인터프리터는 AST 기반으로 바이트 코드를 생성

- 인터프리터가 바이트 코드를 실행할 때 프로파일링 데이터 (자주 사용되는 함수 및 타입 정보) 와 같이 최적화 컴파일러에게 보냄

- 최적화 컴파일러는 프로파일링 데이터를 기반으로 최적화된 코드 생성

- 하지만, 프로파일링 데이터 중에 잘못된 부분이 있다면 최적화를 해제하고 다시 바이크 코드를 실행하여 이전 동작 반복`,
  },
  {
    id: 2,
    category: [4],
    question: '모듈 번들러와 트랜스파일러',
    answer: `- 현대 프론트엔드 개발은 모듈 단위로 파일을 엮어서 개발하는 방식으로, 모듈간의 의존성이 존재해 생기는 문제점
    - 수많은 모듈들의 순서를 어떻게 처리할 것인가? (의존성 처리)
    - 모듈이 많아질수록 HTTP 요청이 많아질텐데, 이로 인한 오버헤드는 어떻게 처리할 것인가?
    - ES6+ 스펙의 코드를 어떻게 처리할 것인가?
- 위 문제점들을 해결하기 위해 나온 것 : 모듈 번들러
- 모듈 번들러 : 각각 모듈의 의존성을 해결하여 하나의 자바스크립트 파일로 만드는 도구
    - 이미지 압축, 최소화 등의 기능을 제공하며 유명한 모듈 번들러로는 Webpack, Parcel, Rollup이 있음
- 트랜스파일러 : 트랜스파일링을 주는 것 (대표적인 것 : Babel)
    - 트랜스파일링: 특정 언어로 작성된 코드를 비슷한 다른 언어로 변환시키는 행위
    - ES6+의 기능을 제공하지 않는 브라우저는 ES5 코드로 변환시키는 과정 필요
    - 리액트의 JSX를 자바스크립트로 변환
    - 타입스크립트를 자바스크립트로 변환`,
  },
]

export default INTERVIEW
