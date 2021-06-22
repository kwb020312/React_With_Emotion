# React Emotion

<img src="gitImages\Emotion_Char.jpg">

Emotion은 JavaScript로 CSS 스타일을 작성하도록 설계된 라이브러리 이며, 여러 기능을 통해 뛰어난 개발자 경험을 제공 할뿐만 아니라 강력하고 예측 가능한 스타일 구성을 제공한다.

해당 Repository 는 Emotion Official Documentation 을 보고 제작되었음을 밝힙니다.

출처 : <a href="https://emotion.sh/docs/introduction">Emotion 공식문서</a>

## 설치방법

```javascript
npm i @emotion/react
```

```javascript
import React from "react";
import { css } from "@emotion/css";

// 내부에서 사용할 변수를 미리 선언
const color = "white";

function App() {
  return (
    <h1
      // 해당 방법으로 편리하게 변수를 css 안에서 사용이 가능함
      className={css`
        background-color: black;
        &:hover {
          color: ${color};
        }
      `}
    >
      Hello React!
    </h1>
  );
}

export default App;
```

이렇게 하면 간단하게 Sass와 비슷한 문법을 react에서 사용할 수 있다.

<img src="gitImages\Hover.jpg">

마우스를 올렸을 때 Hello React!가 표시되는 것을 볼 수 있음

## 적용방법

적용방법에는 세 가지가 있는데

블록단위로 끊거나, 인라인스타일을 적용하거나,
스타일 변수를 선언한 후 적용시키는 것이다.

1. 인라인 스타일

```javascript
yarn add @emotion/react
```

```javascript
import { css } from "@emotion/react";
<h1
  className={css`
    style: value;
  `}
>
  hello
</h1>;
```

2. 블록단위

```jsx
yarn add @emotion/styled
```

```javascript
import styled from "@emtion/styled";

const Button = styled.button`
  style: value;
`;

return <Button>스타일이 적용됨</Button>;
```

3. 변수 선언

```javascript
yarn add @emotion/react
```

```javascript
import { jsx, css } from "@emotion/react";

const style = css`
  style: value;
`;

return <Component css={style} />;
```

## jsx

React에서 Emotion을 사용한다면 해당 기능을 사용하는것이 편리한데,

```javascript
// 바벨 파일을 작성한 후 아래 라인 주석까지 넣어주어야 함
/** @jsx jsx */
import { jsx } from "@emotion/react";

return (
  <div
    css={{
      backgroundColor: "hotpink",
      "$:hover": {
        color: "lightgreen",
      },
    }}
  >
    hotpink 배경이 생길거에요!
  </div>
);
```

위와같이 문자열로 묶어서 hover 또한 사용이 가능하다.

※ 단 바벨파일 작성이 필수기 때문에 공식문서를 잘 읽어보길 바란다.

## 부가 기능들

여기서부터 사람들이 스타일링을 할 때 emotion과 react를 같이 사용하는 이유가 나오는데

1. 어트리뷰트 활용

```javascript
import styled from '@emotion/styled'

const Button = styled.button`
    color: ${props => props.primary ? 'hotpink' : 'red'}
`

return (
    // 핫핑크 색 Hello
    <Button primary>Hello</Button>
    // turquoise 색 Hello
    <Button>Hello</Button>
)
```

2. 자유로운 스타일 추가

```javascript
import styled from "@emotion/styled";

const Basic = () => <div>Hello</div>;

const AddStyle = styled(Basic)`
  color: hotpink;
`;
// 핫핑크 색 Hello 출력
return <AddStyle />;
```

3. 편한 스타일 공유

```javascript
import styled from "@emotion/styled";

const Button = styled.button`
  color: hotpink;
`;

// Button의 스타일을 공유하며 html 태그는 p를사용
const P = Button.withComponent("p");

return (
  <>
    <!-- 핫핑크 색 Hello 출력 -->
    <Button>Hello</Button>
    <P>Hello</P>
  </>
);
```

4. 스타일 상속

```javascript
import styled from "@emotion/styled";

const Child = styled.div`
  color: red;
`;

const Parent = styled.div`
  ${Child} {
    color: green;
  }
`;

return (
  <>
    <Parent>
      <Child>초록글씨</Child>
    </Parent>

    <Child>빨강글씨</Child>
  </>
);
```

5. Props 활용

```javascript
import styled from "@emotion/styled";

const H1 = styled.h1(
  {
    fontSize: 20,
  },
  (props) => ({ color: props.color })
);

return <H1 color="lightgreen">연녹색 글씨</H1>;
```

혹은 Prop의 상태를 감시해 다른 스타일링을 가능하게도 만들 수 있다.

```javascript
import isPropValid from "@emotion/is-prop-valid";
import styled from "@emotion/styled";

// prop에 잘못된 값이 들어왔는지 검사함
const H1 = styled("h1", {
  // prop 이 해당 조건을 만족하는가
  shouldForwardProps: (prop) => isPropValid(prop) && prop !== "color",
})((props) => ({
  color: "hotpink",
}));
return <H1 color="lightgreen">color Prop이 들어가므로 색은 핫핑크</H1>;
```

6. 동적 스타일 할당

```javascript
import styled from "@emotion/styled";
import { css } from "@emotion/react";

const DynamicStyle = (props) => css`
  color: ${props.color};
`;

const Div = styled.div`
  ${DynamicStyle}
`;

return <Div color="hotpink">핫핑크 색 글씨</Div>;
```

7. CSS 동적선택

```javascript
import styled from "@emotion/styled";

const Span = styled("span")`
  color: lightgreen;
  & > a {
    color: hotpink;
  }
`;

return (
  <Span>
    여긴 연초색<a>여긴 핫핑크</a>
  </Span>
);
```
