# 타입스크립트

## 타입스크립트란?

- 타입스크립트는 프로그래밍 언어이다.
- 타입스크립트는 컴파일 언어이다.
  - 전통적인 컴파일 언어와는 다른 점이 많다.
  - 그래서 트랜스파일이라는 용어를 사용하기도 한다.
- 자바스크립트는 인터프리티드 언어이다.

|                    | 컴파일 (Compiled)               | 인터프리트 (Interpreted) |
| ------------------ | ------------------------------- | ------------------------ |
| 컴파일 필요 여부   | 필요                            | 불필요                   |
| 컴파일러 필요 여부 | 필요                            | 불필요                   |
| 컴파일 시점        | 컴파일하는 시점                 | 컴파일하는 시점 없음     |
| 실행 방식          | 컴파일된 결과물을 실행          | 코드 자체를 실행         |
| 실행 시점          | 컴파일된 결과물을 실행하는 시점 | 코드를 실행하는 시점     |

---

# Type Annotation

## Type Annotation 이란?

자바스크립트와 가장 차별되는 기능

타입이라는 요소가 코드상에 드러나는 방식

```tsx
let a = "Mark";

a = 39;

// 'number' 형식은 'string' 형식에 할당할 수 없습니다. 라는 문구와 함께 a에 빨간 밑줄이 그어진다.
```

타입스크립트는 let이라는 키워드를 만나고 값을 할당 받으면 임의로 a라는 변수에 특정한 타입을 지정해둔다. 따라서 a라고 하는 변수는 “Mark”(string)로 부터 타입이 만들어진다.

### 할당을 안 하고 선언만 할 시

```tsx
let a; // 'a' 변수는 암시적으로 'any' 형식이지만, 사용량에서 더 나은 형식을 유추할 수 있습니다.

// = "Mark";

// a = 39;
```

a의 타입에는 any라는 타입이 지정된다.

### a의 변수에 타입을 지정할 시

```tsx
let a: string;

a = "Mark";
```

```tsx
let a: number;

// a = "Mark";

a = 39;
```

```tsx
function hello(b: number) {}

hello(39);
// helllo('Mark')
```

어떤 특정한 변수, 어떤 특정한 객체 등의 어떤 타입이다라고 지정해주는 것을 Type Annotation 이다.

---

# TypeScript Types vs JavaScript Types

TypeScript는 Static Types,

JavaScript는 Dynamic Types

Static Type은 개발하는 중간에 타입을 체크한다.

하지만 자바스크립트의 다이나믹 타입은 개발하는 도중에는 알 수가 없고 실제 런타임에 돌입해야만 잘못된 걸 알 수 있다.

```tsx
// JavaScript
function add(n1, n2) {
  if (typeof n1 !== "number" || typeof n2 !== "number") {
    throw new Error("Incorrect input!");
  }
  return n1 + n2;
}
const result = add(39, 28);

// TypeScript
function add(n1: number, n2: number) {
  return n1 + n2;
}
const result = add(39, 28);
```

- 프로그램이 유용하려면, 가장 간단한 데이터 단위로 작업할 수 있어야 한다.
  - numbers, strings, structures, boolean 값 등등
- TypeScript에서, 우리는 JavaScript 에서 기대하는 것과 동일한 타입을 지원하며, 돕기 위해 추가적인 열거 타입이 제공되었다.
- TypeScript 에서 프로그램 작성을 위해 기본 제공하는 데이터 타입
- **\*\***사용자가 만든 타입은 결국 이 기본 자료형들로 쪼개진다.**\*\***
- JavaScript 기본 자료형을 포함 (superset)
  - \***\*ECMAScript 표준에 따른 기본 자료형은 6가지\*\***
    - Boolean
    - Number
    - String
    - Null
    - Undefined
    - Symbol (ECMAScript 6에 추가)
    - Array: object 형
- **********************\*\***********************\*\*\*\***********************\*\***********************프로그래밍을 도울 몇가지 더 제공된다.**********************\*\***********************\*\*\*\***********************\*\***********************
  - Any, Void, Never, Unknown
  - Enum
  - Tuple: object 형

---

# Primitive Type

- 오브젝트와 레퍼런스 형태가 아닌 실제 값을 저장하는 자료형
- 프리미티브 형의 내장 함수를 사용 가능한 것은 자바스크립트 처리 방식 덕분
- (ES2015 기준) 6가지
  - boolean
  - number
  - string
  - symbol (ES2015)
  - null
  - undefined

```tsx
let name = "mark";
name.toString();
```

************\*\*\*\*************Primitive Type************\*\*\*\*************

- literal (값 그 자체를 문자로 값을 할당하는 방식) 값으로 Primitive 타입의 서브 타입을 나타낼 수 있다.

```tsx
ture;
("hello");
3.14;
null;
undefined;
```

- 또는 래퍼 객체로 만들 수 있다.

```tsx
new Boolean(false); // typeof new Boolean(false) : 'object'
new String("world"); // typeof new String('world') : 'object'
new Number(42); // typeof new Number(42) : 'object'
```

**********\*\***********Type Casing**********\*\***********

- TypeScript의 핵심 primitive types 은 모두 소문자이다.
- Number, String, Boolean, Symbol 또는 Object 유형이 위에서 권장한 소문자 버전과 동일하다고 생각하고 싶을 수 있다.
- 이러한 유형은 언어 primitive 를 나타내지 않으며, 타입으로 사용해서는 안된다.
  ```tsx
  function reverse(s: String): String {
    return s.split("").reverse().join("");
  }
  reverse("hello world");
  ```
- 대신 number, string, boolean, object, 그리고 symbol 타입을 사용하면 된다.
