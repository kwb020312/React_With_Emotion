# React Emotion

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
