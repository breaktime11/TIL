# JVM은 무엇이며 자바 코드는 어떻게 실행하는 것인가

> ### Whiteship Live Study - 1주차 과제
>
> https://github.com/whiteship/live-study/
>
> - JVM이란 무엇인가
> - 바이트코드란 무엇인가
> - 컴파일 하는 방법
> - 실행하는 방법
> - JVM 구성 요소
> - JVM 동작구조
> - JIT 컴파일러란 무엇이며 어떻게 동작하는지
> - JDK와 JRE의 차이

<br>

# JVM이란 무엇인가

> JVM이란 Java Virtual Machine의 약자로 '**자바를 실행시키기 위한 가상 기계 (컴퓨터)**'를 말하며 **Java Byte Code(.class)를 OS에 맞게 해석**해준다.
>
> JVM 덕분에 자바는 어떠한 운영체제 위에서도 실행 파일의 변경 없이, 즉 다시 컴파일할 필요 없이 동일한 모습으로 실행 가능하다.

출처 https://oggwa.tistory.com/73

![img](https://blog.kakaocdn.net/dn/cHv3qr/btqGsMADwdF/kFUfkIDK5WAyHJZGjTzcOK/img.png)

- 일반 애플리케이션의 코드는 OS를 거쳐 바로 컴퓨터(하드웨어)로 전달되는데 비해 자바 애플리케이션의 코드는 JVM을 거친 뒤 OS에서 컴퓨터로 전달된다. 
- 자바 애플리케이션은 컴퓨터에서 바로 실행 가능하게 완전히 컴파일된 상태가 아니고 실행 시 JVM을 통해 해석되기 때문에 속도가 느리다는 단점이 있다.
- 자바로 작성된 애플리케이션은 모두 JVM 위에서 실행되기 때문에 자바 애플리케이션 실행을 위해서는 JVM이 꼭 필요하다.
- 요즘엔 바이트코드를 기계어로 바로 변환해주는 JIT 컴파일러와 향상된 최적화 기술이 적용되어 속도 문제는 상당히 개선되었다.

<br>

<br>

# 바이트 코드란 무엇인가

바이트 코드란 **자바 가상 머신이 이해할 수 있는 코드**를 의미한다. 자바 컴파일러로 변환되는 코드의 명령어 크기가 1바이트라서 바이트코드라고 불린다고 한다.

자바는 **OS에 종속적이지 않기 위해** JVM이 이해할 수 있는 언어인 바이트 코드 형태로 제공되며 바이트코드와 JVM 덕분에 자바는 어떠한 OS에서도 동일하게 실행될 수 있다.

<br>

## 바이너리 코드 vs 바이트 코드

- **바이너리 코드**
  - **컴퓨터(CPU)가 인식할 수 있는 코드 **
  - 기계어는 0과 1로 구성된 바이너리 코드
- **바이트 코드**
  - CPU가 아닌 **가상 머신이 이해할 수 있는 코드**
  - 가상 머신이 인식할 수 있는 0과 1로 이루어진 이진코드
  - 고급언어(인간의 언어)로 작성된 소스 코드를 가상 머신이 이해할 수 있는 중간 코드로 컴파일 한 것

<br>

<br>

#  JAVA 코드가 실행되는 과정

출처 https://cocomo.tistory.com/499

![img](https://blog.kakaocdn.net/dn/baiNAY/btqA04z2Osg/ZE7DLIqmvFxCGXdwkIZr71/img.png)

### 빌드 단계
1. 소스코드(`.java`)가 자바 컴파일러인 **javac**에 의해 JVM을 위한 중간 단계의 코드인 자바 바이트 코드(`.class`)로 **컴파일**된다. 

### 런타임 단계

  2. **Class Loader**는 **동적 로딩**을 통해 컴파일된 클래스들을(바이트 코드) JVM 내로 로드하고 적재한다.
    3. 이 때 클래스들은 **Runtime Data Area**, 즉 JVM의 메모리에 올라간다.
    4. **Execution Engine**은 바이트 코드를 기계어로 바꿔주는데, 이 때 인터프리터, JIT 컴파일러 두 가지 방식이 있다.

<br>

## 컴파일 vs 링크 vs 런타임

- **컴파일**
  - 컴파일 시간은 프로그램이 빌드될 때 발생한다. 즉, 빌드 단계 중 컴파일이 포함되어있다.
    - **빌드** : 소스코드 파일을 실행 가능한 소프트웨어로 만드는 과정
  - 컴파일이란 개발자가 작성한 소스 코드를 바이너리 코드(기계어)로 변환하는 과정
- **링크**
  - 여러개로 분리된 소스파일들을 최종 실행 가능한 파일을 만들기 위해 서로 연결해주는 작업
  - 링크의 종류
    - 정적 링크 (Static Link) : 컴파일된 소스파일을 연결해 실행 가능한 파일을 만드는 것
    - 동적 링크 (Dynamic Link) : 프로그램 실행 도중 프로그램 외부에서 코드를 찾아 연결해주는 것
  - 자바 프로그램 실행 도중  JVM이 필요한 클래스를 찾아서 클래스패스에 로드해주는데 이는 동적링크의 예이다.
- **런타임**
  - 컴파일 과정을 마친 프로그램이 실행, 동작되는 과정

<br>

<br>

# JAVA의 컴파일과 실행

>  ### 컴파일이란?
>
>  컴파일이란 사람이 이해하는 언어(원시 코드)를 컴퓨터가 이해하는 언어(목적 코드)로 바꿔주는 과정을 말한다. 
>
>  이러한 작업을 해주는 프로그램을 **컴파일러**라고 부른다.

<br>

## 컴파일

자바에서 컴파일이란 `.java` 파일을 `.class` 파일 (**Byte Code**)로 만드는 과정을 말한다.

- JDK에 포함되어있는 **javac (java compiler)** 명령어를 사용

  ```bash
  # javac example.java
  
  # ls
  example.java
  example.class <- Byte Code
  ```

<br>

## 실행

- `.class` 파일을 실행할 때는 `java` 명령어를 사용

  ```bash
  # java example.class
  ```

<br>

<br>

## JVM 구성요소

> JVM은 크게 세 가지 구성요소를 가진다. 
>
> 1. Class Loader
> 2. Runtime Data Area
>    - Method Area
>    - Heap
>    - Stack
>    - PC Register
>    - Native Method Stack
> 3. Execution Engine
>    - Garbage Collector
>    - Interpreter
>    - JIT (Just-In-Time)

출처 https://javatutorial.net/jvm-explained

![Java Virtual Machine architecture diagram ](https://javatutorial.net/wp-content/uploads/2017/10/jvm-architecture-992x1024.png)



## 1. Class Loader

- 자바는 동적으로 클래스를 로드를 하기 때문에 런타임시 필요한 클래스를 로드하고 링크한다. 
- 이 때 **Class Loader는 JVM 속으로 클래스(.class)를 로드하고 적재하는 작업을 수행**
- 보통 가장 처음에 로드되는 클래스는 static main() 메소드를 사용해 정의된다.

<br>

## 2. Runtime Data Area

- JVM이 프로그램을 실행하기 위해 운영체제로부터 할당받은 **메모리 공간**
- Class Loader가 배치한 데이터들을 보관하는 저장소로 다섯 가지의 구성요소로 나뉘어져 있다.
  - Method Area, Heap Area, Stack Area, PC Registers, Native Method Stacks
  - Stack , PC, Native Method Stacks는 쓰레드마다 하나씩 생성되며 그 외의 메모리 영역은 모든 쓰레드가 공유함

<br>

### (1) Method Area (Static)

- 메소드 영역은 JVM 메모리 영역 중 **가장 먼저 데이터가 저장**되는 곳이며 JVM 시작시 생성되어 프로그램 종료 전까지 유지됨
- 적재된 **클래스 파일들**, 프로그램 실행에 필요한 클래스, 인터페이스, 메소드, Static 변수, 필드 저장
  - 클래스 파일 (= 메타정보 / 메소드 +클래스 변수)
- JVM에서 클래스를 실행하면 메소드 영역에서 클래스 정보를 복사해 힙 영역에서 메모리를 할당해 실행한다.
- JVM에서 실행되고 있는 **모든 쓰레드가 공유**

<br>

### (2) Heap Area (동적 할당 영역)

- 런타임시 동적으로 메모리가 할당되고 소멸되는 영역
- **GC (Garbage Collection)를 수행**하는 영역
- Class를 실행해 **객체(Instance)를 생성**하면 Heap에 저장됨
  - 소스 상 new 연산자 호출시
- JVM에서 실행되고 있는 **모든 쓰레드가 공유**

<br>

### (3) Stack Area (정적 할당 영역)

- **호출된 메소드와 메소드 정보**가 저장되는 영역
  - 메소드가 실행될 때마다 매개변수, 로컬 변수, 복귀 주소 등이 저장됨
  - 메소드 종료시 메모리 공간이 소멸됨

- 각 쓰레드 마다 하나씩 존재하며, 쓰레드가 시작될 때 할당받음

<br>

### (4) PC Registers

- 현재 JVM이 수행할 **명령어의 주소를 저장**하는 메모리 공간
- 자바에서는 쓰레드 마다 별도의 PC 레지스터가 존재하며 쓰레드가 시작될 때 메모리를 할당받는다. 이곳에는 쓰레드가 실행할 명령의 주소가 저장됨

<br>

### (5) Native Method Stacks

- **하드웨어 정보**인 OS의 시스템 정보, 리소스를 사용하거나 접근하기 위한 코드를 저장
- 자바 프로그램은 JNI(Java Native Interface) API를 사용하면 OS 시스템에 접근이 가능하다. 주로 C, C++ 등으로 작성되어있음

<br>

## 3. Execution Engine

- 실행 엔진은 **바이트코드를 읽고 실행하는 역할**을 한다.
- 바이트코드를 실행하는 두 가지 방식이 있다.
  - 인터프리터
  - JIT(Just-In-Time)  컴파일러

### (1) 인터프리터 방식

인터프리터 방식이란 자바 **바이트 코드를 한 줄씩 읽고 해석하는 방식**을 말한다. 하나씩 해석하고 처리하기 때문에 전체 코드의 관점에서 봤을 때 속도가 느리다는 단점이 있다.

- 소스코드가 수정될 때마다 재컴파일해줘야 하는 정적 컴파일 방식(C, C++)과 달리 인터프리터 방식은 **컴파일 과정을 거칠 필요 없이 수정이 쉽다**는 장점이 있다.
- 이 때문에 인터프리터 언어는 수정이 빈번히 발생하는 프로그래밍에서 많이 사용된다.
- Java, Python, Ruby, 웹 브라우저에서 동작하는 CSS, Javascript는 인터프리터 언어의 예이다.

<br>

### (2) JIT(Just-In-Time)  컴파일러

- 인터프리터 : 소스코드를 한 문장씩 읽고 바로 기계어로 바꿔줌
- 컴파일러 : 전체 소스코드를 전부 읽어 기계어 파일로 바꾸고 그 후에 변환된 코드를 실행

JIT(Just-In-Time)  컴파일러는 인터프리터 방식의 단점인 **속도 문제를 해결**하기 위해 나온 인터프리터와 컴파일러를 결합한 방식이다.

- 처음엔 인터프리터 방식을 사용하다가 적정한 때에 바이트코드 전체를 기계어로 바꾼다.
- 인터프리터 방식으로 바이트코드를 기계어로 번역할 때 중복된 코드를 **캐싱**하여 똑같은 코드를 매번 번역하는 것을 방지해 속도를 보완해준다.

<br>

### Gargabe Collector

- JVM이 **메모리를 관리**하는 방법
- 동적으로 할당된 Heap 메모리 영역에서 더 이상 참조하지 않아 필요 없는 영역을 해제한다.

<br>

<br>

# JDK와 JRE의 차이

출처 https://www.intexsoft.com/blog/post/jvm.html

![Tools for Launching and Developing Products on JVM - IntexSoft](https://www.intexsoft.com/images/intexsoft/blog/JVM/jvm1.png)

### JRE(Java Runtime Environment)

- JRE는 자바 실행 환경의 약자이다. 
- JRE는 **JVM의 실행 환경을 구현**한 것
- JVM과 JVM이 자바 프로그램을 동작시킬 때 필요한 라이브러리 파일들과 기타 파일들을 가지고 잇다. 
- 자바를 실행시키 위해서는 JRE가 필요하지만 자바 프로그래밍 도구는 포함되어 있지 않아서 **개발을 위해서는 JDK를 설치**해야한다.

<br>

### JDK (Java Development Kit) 

- JDK는 자바 개발 도구의 약자이다
- JDK는 **JRE + 개발에 필요한 도구 (javac, java)** 등을 포함한다.

<br>

<br>

### 출처

- https://j4bez.tistory.com/6?category=811686
- https://gblee1987.tistory.com/173
- https://freezboi.tistory.com/39
- https://ttuk-ttak.tistory.com/38
- https://iann.tistory.com/17
- https://hoooooooooooooop.tistory.com/entry/javahalle1
- https://goodgid.github.io/Java-JDK-JRE/