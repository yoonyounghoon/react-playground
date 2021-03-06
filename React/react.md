### 중요하지만 헷갈리는 리액트 개념 이해하기

### 1. 상태값과 속성값으로 관리하는 UI 데이터

UI 라이브러리인 리액트는 UI 데이터를 관리하는 방법을 제공한다.

- UI 데이터는 컴포넌트 내부에서 관리되는 상탯값과 부모 컴포넌트에서 내려주는 속성값으로 구성된다.
- UI 데이터가 변경되면 리액트가 컴포넌트 함수를 이용해서 화면을 자동으로 갱신해 주며, 이것이 리액트의 가장 중요한 역할이다.

#### 같은 컴포넌트 사용에 대해서

- 사용된 각 컴포넌트는 상탯값을 위한 자신만의 메모리 공간이 있어서 같은 컴포넌트라도 자신만의 상탯값이 존재한다. 다음과 같이 컴포넌트를 두 번 사용하면 두 개의 상탯값이 따로 관리된다.

```jsx
function App() {
    return (
        <MyComponent/>
        <MyComponent/>
    )
}
```

#### 불변 객체로 관리하는 속성값과 상탯값

속성값은 불변 ( immutable ) 변수이지만 상탯값은 불변 변수가 아니다. 하지만 상탯값도 불변 변수로 관리하는게 좋다.

속성값은 불변 변수이기 때문에 값을 변경하려고 시도하면 에러가 발생한다.

```jsx
function Ttile(props) {
  props.title = "abc";
}
```

### 2. 리액트 가상 돔

리액트는 렌더링 성능을 위해 가상 돔을 활용한다.

- 브라우저에서 돔을 변경하는 것은 비교적 오래 걸리는 작업이다.
- 따라서 빠른 렌더링을 위해서는 돔 변경을 최소화 해야 한다..
- 그래서 리액트는 메모리에 가상 돔을 올려 놓고 이전과 이 후의 가상 돔을 비교해서 변경된 부분만 실제 돔에 반영하는 전략을 채택했다.

### 컴포넌트에서 부수 효과 처리하기: useEffect

- 함수 실행시 함수 외부의 상태를 변경하는 연산을 부수 효과라고 부른다.
  > ( API를 호출하는 것과 이벤트 처리 함수를 등록하고 해제하는 것 등이 부수효과의 구쳬적인 예 )
- 특별한 이유가 없다면 모든 부수 효과는 useEffect 훅에서 처리하는게 좋다.

- useEffect 훅에 입력하는 함수를 부수 효과 함수라고 한다.

- 기본적으로 렌더링결과가 실제 돔에 반영된 후 호출되고, 컴포넌트가 사라지기 직전에 마지막으로 호출된다.

- 리렌더링 된다는것 !== 컴포넌트가 언마운트됬다가 다시 마운트 되는것이 아니다.
- 리렌더링 된다는 것 === 컴포넌트의 상태나 props가 업데이트 된다는 것..
