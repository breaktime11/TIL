### :corn:Nomad Coder - 바닐라 JS로 크롬 앱 만들기 

https://academy.nomadcoders.co/courses/enrolled/435558

- 위 강의를 들으며 Javascript로 to-do-list + weater api 사용


<br>

<br>

# VanillaJS

## 1. Version

- ECMAscript
  - Specification(체계 매뉴얼)에 대한 업데이트
  - ES5, ES6 등
  - Vanilla JS : 라이브러리 없는 Javascript / 웹에서 기초가 되는 언어

<br>

## 2. Variable (변수)

### 변수

- 변수: 값의 위치(메모리 상의 주소)를 기억하는 저장소에 접근하기 위해  명명한 식별자
- 자바스크립트는 동적 타입 언어
  - 변수의 타입 지정 없이 자동으로 변수의 타입이 결정된다.
  - 같은 변수에 여러 타입의 값 할당 가능

<br>

### 변수 선언 키워드

- `let` : 값 변경 O / Hoisting X
- `const`(상수) : 값 변경 X / Hoisting X
- `var` : 값 변경 O / Hoisting O

<br>

### Hoisting

- 변수의 정의가 그 범위에 따라  선언(declaration)/초기화(initialization)/할당 분리되는 것을 의미
- 변수를 끌어올린다

```javascript
// hoisting.js
  1 console.log(name)
  2 var name = "itholic"
```

결과

```javascript
$ node hoisting.js
undefined
```

내부적으로 해석

```javascript
// hoisting.js
  1 var name
  2 console.log(name)
  3 name = "itholic"
```

<br>

<br>

## 3. Array

```javascript
const daysOfWeek = ["Mon", "Tue", "wed"];
console.day(daysOfWeek);
console.day(daysofWeek[1]);
```

<br>

<br>

## 4. Object

```javascript
const jessInfo = {
    name:"jess",
    age:"26",
  	gender:"Female",
    favMovies: ["Big Fish", "Vanilla Sky", "Parasite"],
    favFood: [
        {name:"Mara", fatty:false}, 
        {name:"burger", fatty:true}
    ]
}
jessInfo.gender = "Male";
console.log(jessInfo);
console.log(jessInfo.gender);
```

<br>

<br>

## 5. Function

- 특정한 기능을 하는 코드 덩어리
- 자바스크립트의 함수는 리턴 타입을 명시 X

<br>

#### Console.log('')

- log는 Console Object 내의 함수이다 
- argument(인자)를 받아 출력

<br>

#### 함수 선언

- `function` 키워드로 선언
- `return`을 통해 값을 반환

<br>

```javascript
function sayHello(potato){
    console.log('Hello' + potato);
}

sayHello("Nic");
console.log();

---
> Hello! Nic
```

<br>

#### 템플릿 리터럴

- `'${value}'`
  - ``(백틱)으로 선언 가능
  - 처리된 값을 문자열로 반환

<br>

```javascript
function sayHello(name, age){
    return `Hello ${name} you are ${age} years old`;
}
const greetNicolas = sayHello("nicolas", 14)
console.log(greetNicolas);	//sayHello 함수의 실행값
```

<br>

<br>

#### First-Clss Object

- first-class Object :  다음과 같은 조건을 만족하는 객체
  - 변수나 데이터 구조안에 담을 수 있다.
  - 파라미터로 전달 할 수 있다.
  - 반환값(return value)으로 사용할 수 있다.
  - 할당에 사용된 이름과 관계없이 고유한 구별이 가능하다.
  - 동적으로 프로퍼티 할당이 가능하다.
- Javascript에서 일반적으로 사용되는 객체 변수는 모두 first-class-object

```javascript
const cal = {
    plus : function(a,b){
        return a+b;
    }
}

const plus = cal.plus(5,5)
console.log(plus);
```

<br>

<br>

## 6. DOM

- Document Object Module
  - 브라우저의 렌더링 엔진은 웹 문서를 로드한 후, 파싱하여 웹 문서를 브라우저가 이해할 수 있는 구조로 구성하여 메모리에 적재하는데 이를 DOM이라 함
  - html의 모든 요소를 객체로 만든다
  - javascript로 HTML 수정 가능
- document.querySelector()
  - 제공한 선택자 또는 선택자 뭉치와 일치하는 문서 내 첫 번째 Element 반환
  - 일치하는 요소가 없으면 null 반환

```javascript
const title = document.getElementById("title");

title.innerHTML = "Hi";
title.style.color = "red";

console.log(title);
console.dir(title);
```

<br>

<br>

## 7. Event

- 이벤트 : 웹사이트에서 발생하는 것들 ex) load, printing

```javascript
function handleResize(){
	console.log("I've been resized");
}
function handleClick(){
    title.style.color = "blue";
}

window.addEventListner("resize", handleResize); //resize이벤트 발생시
title.addEventListner("click", handleClick);
```

<br>

<br>

## 8. 시계 만들기

### setInterval()

- 두개의 인자받음 1)실행할 함수 2)함수를 실행할 시간 간격
- setInterval(fn, 1000)
- milliseconds 기준 `3000 = 3초

<br>

### 삼항 연산자

- 조건 `?` 참일때 `:` 거짓일때

<br>

```javascript
const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1")

function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerHTML = `${hours < 10 ? `0${hours}` : hours}:${
        minutes < 10 ? `0${minutes}` : minutes}:${
        seconds < 9 ? `0${seconds}` : seconds
    }`;
}

function init(){
    getTime();
    setInterval(getTime, 1000);
}
init();
```

<br>

<br>

## 9. User Name 저장하기

- index.html

```javascript
<form class="js-form">
	<input type="text" placeholder="What is your name?"/>
</form>

<script src="greeting.js"></script>
```

<br>

- greeting.js

```javascript
const form = document.querySelector(".js-form"),
    greeting = document.querySelector(".js-greetings"),
    input = form.querySelector("input");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

// LocalStorage에 저장
function saveName(text){
    localStorage.setItem(USER_LS, text);
}

// Submit 관리
function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser == null){
        askForName();
    } else {
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();
}

init();
```

- querySelector : 찾은 첫번째 것을 가져옴
- querySelectorAll : 찾은 모든것 가져옴
- getElementsByTagName : 태그로 가져옴 ex) input, body, html, div

<br>

### Local Storage

- 작은 정보를 컴퓨터/브라우저에 저장하는 것

<br>

### event.preventDefault();

- Form의 default는 입력 후 엔터를 누르면 새로고침됨

- event.preventDefault()를 사용하면 prevent default event

  <br>

### input.value

- 입력된 값의 value 얻어옴

<br>

### JSON

- Javascript에서 데이터를 전달할 때 그걸 다룰 수 있도록 Object로 바꿔줌

<br>

#### filter 함수

- 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환

<br>

### Math.random()

- 난수 생성
- Math.randon() * 5 는 1~5 난수

<br>

### Math.floor, Math.ceil

- 3.1을 3으로 / 3.5를 4로

<br>

<br>

## 10. 사용자 위치 정보 알아오기

```javascript
function askForCoords(){
	navigator.getCurrentPosition(handleGeoSuccess, handleGeoError);
}
```

### navigator.getCurrentPosition

- 2개의 function 필요
  1. 위치 정보를 가져오는데 성공했을 때 function
  2. 실패시 function

<br>

<br>

## 11. 날씨 정보 API

- API를 통해 다른 서버로부터 데이터를 받아올수 있음
- API는 특정 웹사이트로부터 데이터를 얻거나 Machines 끼리 통신하기 위해 고안됨
- https://home.openweathermap.org/
- API keys 복사

```javascript
const API_KEY = "643adbd396a1b85d6abb367fc3ad4e60";
```

- 아래를 이용

```
By geographic coordinates
API call:
api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}
Parameters:
lat, lon coordinates of the location of your interest
Examples of API calls:
api.openweathermap.org/data/2.5/weather?lat=35&lon=139

API response:
```

<br>

### Javascript를 이용해 특정 url 호출하는 방법

- Javascript에서는 딱히 새로고침 안해도 data 가져올수 있음 

- 백그라운드에서 계속적으로 데이터 가져오기 때문

- `fetch` (` 백틱 안에 https:// 주소)

  ```javascript
  function getWeather(lat, lon){
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`).then();
  }
  ```

- appid 추가해주기
  - API_KEY 를 넣어줌
  - API를 제공하는 쪽에서 수많은 요청자들에 의해 서버가 무리가지 않게끔 함
- then()
  
  - 데이터가 완전히 들어온 다음에 함수를 호출함

<br>

```javascript
//fetch를 통해 data를 얻어옴
function getWeather(lat, lon){
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    ).then(function(response) {
        return response.json();
    }).then(function(json){
        console.log(json);
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature} @ ${place}`
    });
}
```

- console 창에서 오는 data에서 temp와 place 정보를 얻을 수 있다