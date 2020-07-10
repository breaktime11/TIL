# 1. JHipster란?

> ### 출처 
>
> - [https://velog.io/@max9106/JHipster-JHipster%EB%9E%80-ywk17h75tx](https://velog.io/@max9106/JHipster-JHipster란-ywk17h75tx)
> - https://jusungpark.tistory.com/52
> - https://nesoy.github.io/articles/2019-02/Webpack

## JHipster

- JHipster = **Java Hipster**
- JHipster는 스프링 부트 기반으로 프로젝트의 골격을 만들어주는 자바 기반의 개발 플랫폼이다.
  - server side와 frontend를 한꺼번에 생성할 수 있다.
- **마이크로서비스** 어플리케이션을 쉽고 빠르게 만들어 줄 수 있는 기능을 제공한다.
- yeoman, webpack, maven으로 애플리케이션을 생성한다.

<br>

### Webpack

규모가 큰 웹 애플리케이션은 복잡한 자바스크립트와 대규모 의존성 트리를 가지고 있는데 

이 복잡한 애플리케이션을 하나의 Javascript 파일로 관리할 수 없다.

- **모듈**
  - 프로그램을 구성하는 구성 요소의 일부
  - 일반적으로 관련된 데이터와 함수들이 묶여서 모듈을 형성하고 파일 단위로 나뉘어진다.
  - 모듈화 프로그래밍은 기능별로 파일을 나눠가며 프로그래밍을 하는 것으로 유지보수가 쉽다는 장점이 있다.
- **번들**
  - 소프트웨어 및 일부 하드웨어와 함께 작동하는 데 필요한 모든 것을 포함하는 Package
- **번들러**
  - 지정한 단위로 파일들을 하나로 만들어서 요청에 대한 응답 환경을 만들어준다.
  - 번들러를 사용하면 소스 코드를 모듈별로 작성할 수 있고 모듈간 또는 외부 라이브러리의 의존성도 쉽게 관리 가능하다.
- **웹팩**은 프로젝트의 구조를 분석하고 자바스크립트 모듈을 비롯한 관련 리소스들을 찾은 다음 이를 브라우저에서 이용할 수 있는 번들로 묶고 패킹하는 **모듈 번들러(Module bundler)**다.

<br>

### Yeoman

- **Yeoman**은 웹 개발의 프레임워크 및 라이브러리들을 통합하여 쉽게 프로젝트들을 생성할 수 있는 Tool이다.

- `yo`를 설치 후 원하는 도구를 설치

  ```
  npm i -g yo
  npm i -g generator-원하는도구
  ```

- Javascript Frontend Application에 가장 적합

- 높은 성능

- 기본적으로 node.js가 설치되어 있어야한다.

<br>

## JHipster가 제공하는 기술

### Client Side

![img](https://media.vlpt.us/post-images/max9106/053438c0-e417-11e9-a8b0-613d9555ace8/-2019-10-01-3.44.44.png)

- **Angular**
  - SPA(Single Page Application) 개발을 위한 구글의 오픈소스 자바스크립트 **프레임워크**
  - 웹 애플리케이션, 모바일 웹, 네이티브 모바일, 데스크탑 애플리케이션까지 프론트엔드 개발에 필요한 대부분의 기능이 갖추어져 있다.

- **React**
  - 페이스북에서 제공하는 자바스크립트 UI **라이브러리**
  - React는 라이브러이다. 웹을 만드는 데 꼭 필요한 도구들이 전부 제공되지 않는다. 따라서 가볍고, 선택의 폭이 넓다.
  - 컴포넌트 기반으로 컴포넌트에 데이터를 흘려보내면 설계된 대로 UI가 조립되어 사용자에게 보여진다.
- **NPM**
  - 모든 client-side 도구들을 사용하고 설치
  - 빠르고 안정적인 종속성 관리

<br>

### Framework vs Library

- **Framework** : 소프트웨어의 특정 문제 해결을 위해 상호 협력하는 클래스와 인터페이스의 집합
  - 인터페이스는 개발을 이루는 구조와 코드, 알고리즘, 데이터베이스, 사용자 인터페이스의 집합체
- **Library** : 단순 활용이 가능한 도구들의 집합 / 사전에 만들어진 코드의 집합
- **차이점**
  - **Flow(흐름)에 대한 제어 권한**이 **어디**에 있느냐의 차이
  - 프레임워크는 전체적인 흐름을 **자체적**으로 가지고 있으며, 프로그래머가 그 안에 필요한 코드를 작성
  - 라이브러리는 **사용자**가 흐름에 대해 제어를 하며 필요한 상황에 가져다 쓰는 것

<br>

### Server Side

![img](https://media.vlpt.us/post-images/max9106/59de9190-e417-11e9-8a8d-f7ea9a766832/-2019-10-01-3.46.48.png)

- **Spring Boot**
  - 스프링에서 어려운 설정이나 WAS에 대한 설정없이 바로 개발에 들어갈 수 있도록 만든 프레임워크
  - 최소한의 설정으로 스프링의 여러가지 라이브러리나 플랫폼을 사용 가능
  - 내장형 톰캣, 제티 등을 탑재하여 단독 실행가능
  - 빠르고 가벼움, 필요할 때 매우 강력



<br>

## JHipster의 장점

![image-20200701185253386](https://user-images.githubusercontent.com/65323733/87130687-4252de00-c2ce-11ea-8ef2-fc7883bef966.png)

- 마이크로서비스 어플리케이션을 쉽고 빠르게 만들 수 있다.
- Cloud-Native Application을 생성할 수 있다.
- 쉽고 빠르게 Docker나 Kubernetes를 사용할 수 있다.

<br>

<br>

# 2. JHipster Application 실습

> JHipster를 사용해서 가장 기본적인 블로그를 생성해보자
>
> https://www.youtube.com/watch?v=uQqlO3IGpTU&feature=emb_title

## Install JHipster

### 필요한 설치

1. Install Java 11

2. Install Git

3. Install Node.js

4. **Install JHipster**

   ```
   npm i -g generator-jhipster@6.1.2
   ```

<br>

## Start JHipster

```
mkdir blog
cd blog
jhipster
```

### 프로젝트 생성시 선택 가능한 내역

- 어떤 타입의 프로젝트를 생성하는가?
  - **모놀로식 애플리케이션**
  - 마이크로서비스 애플리케이션
  - 마이크로서비스 게이트웨이
  - JHipster UAA Server
- 어플리케이션 이름 설정 (자유)
  - blog
- package 이름 설정 (자유)
  - org.jhipster.blog
- JHipster Regisrty를 사용할 것인가?
  - yes
  - **no**
- 어떤 인증을 사용 할 것인가?
  - **JWT**
  - Oauth2 / OIDC
  - HTTP Sesstion Authentication
- 어떤 DB를 사용 할 것인가?
  - **SQL(H2, MySQL, MariaDB, PostgreSQL, Oracle, MSSQL)**
  - MongoDB
  - Couchbase
  - Cassandra
- 어떤 production DB를 사용할 것인가?
  - MySQL
  - MariaDB
  - **PostgreSQL**
  - Oracle
  - Microsoft
- 어떤 development DB를 사용할 것인가?
  - **H2 with disk-based persistence**
  - H2 with in-memory persistence
  - MySQL
- Spring Cache를 사용할 것인가?
  - **Ehcach**
  - Hazelcast
  - Memcached
  - 사용안함
- Hibernate 2nd level cache를 사용할 것인가?
  - **yes**
  - no
- 어떤 빌드 도구를 쓸 것인가?
  - **Maven**
  - Gradle
- 다른 기술을 사용할 것인가?(모두 선택 가능)
  - **엘라스틱서치 기반 검색**
  - 웹소켓
  - OpenAPI-generator
  - Kafka
- 어떤 Front를 사용 할 것인가?
  - **Angular**
  - React
- 웹사이트 테마는? (자유결정)
  - **Default JHipster**
  - Cerulean
  - Cosmo
  - Cyborg
  - Darkly
  - Flatly
  - Journal
  - Litera
  - Lumen
  - Lux
  - Materia
  - Minty
  - Pulse
  - Sandstone
  - Simplex
  - Sketchy
  - Slate
  - Solar
  - Spacelab
  - Superhero
  - United
  - Yeti
- 국제화 지원 할 것인가?
  - **yes**
  - no
- 추가 테스트 프레임워크를 사용할 것인가?(모두 선택 가능) - 선택 X (Enter 키)
  - Gatling
  - Cucumber
  - Protractor
- JHipster Marketplace에서 다른 generator을 설치할 것인가?
  - yes
  - **no**
- 어떤 기본 언어를 선택 할 것인가?
  - 한국어
  - **영어**
  - 기타 등등
- 추가로 지원할 언어는?(모두 선택 가능)
  - 한국어

<br>

## JHipster 실행하기

```
idea64 pom.xml
mvnw
```

- `idea64` 명령어를 쓰기 위해 **환경 변수 Path**에 IntelliJ 경로 추가
  
- Port 8080 already in use 에러 → port kill
  
  ```
  netstat -o -an
  taskkill /f /pid 프로세스id
  ```

- localhost:8080 들어가면 생성된 페이지 확인 가능

![image-20200701171253199](https://user-images.githubusercontent.com/65323733/87130720-4ed73680-c2ce-11ea-8851-957d04f7ecb7.png)

<br>

## JHipster Entity 추가

### blog.jdl

```
entity Blog {
  name String required minlength(3),
  handle String required minlength(2)
}

entity Entry {
  title String required,
  content TextBlob required,
  date Instant required
}

entity Tag {
  name String required minlength(2)
}

relationship ManyToOne {
  Blog{user(login)} to User,
  Entry{blog(name)} to Blog
}

relationship ManyToMany {
  Entry{tag(name)} to Tag{entry}
}

paginate Entry, Tag with infinite-scroll
```

- git bash - copy & paste

  ```
  vi  blog.jdl
  ```

<br>

```
jhipster import-jdl blog.jdl
a
mvnw
```

- 생성한 Entity 프로젝트에 import 
- Overwrite all 선택
- 재실행

<br>

![image-20200701171307116](https://user-images.githubusercontent.com/65323733/87130742-572f7180-c2ce-11ea-814b-e2da71162a89.png)

- `Entities` - `Blog` 들어가면 Entity가 정상적으로 추가되고 샘플 데이터도 들어있는 것을 확인할 수 있다.

![image-20200701171541428](https://user-images.githubusercontent.com/65323733/87130766-5eef1600-c2ce-11ea-8ce2-51c1cd2050fc.png)

- 샘플 데이터를 없애고 싶으면 IntelliJ로 들어가서 `ctrl+shift+N`을 누른 뒤 `application-dev.yml` 파일에서 `faker`를 찾는다.

  ```yml
  liquibase:
  # Remove 'faker' if you do not want the sample data to be loaded automatically
  contexts: dev
  ```

  - `contexts`에서 faker를 지워주면 된다.

- `h2`를 사용하고 file-based DB이기 때문에

  ```
  rm -rf target/h2db
  mvnw
  ```

  - 컴파일된 스크립트를 삭제 후 (git bash)
  - 재시작 하면된다

![image-20200701172028711](https://user-images.githubusercontent.com/65323733/87130778-67dfe780-c2ce-11ea-9354-df78c68759e7.png)

- 샘플 데이터가 없어진 것을 확인할 수 있다

<br>

<br>

## Business Logic 바꾸기

- `Entities` - `Blog`에서 블로그 생성 가능
- `Entities` - `Entry` 에서 글 생성 가능

<br>

![image-20200701172538262](https://user-images.githubusercontent.com/65323733/87130799-6e6e5f00-c2ce-11ea-968a-4f839db72a3f.png)

- 현재는 모든 블로그들의 글들을 한꺼번에 볼 수 있게 설정되어있다. 
- 블로그 별로 글을 보고싶으면 IntelliJ에서 수정해주면 된다.

<br>

### BlogResource.java

```java
@GetMapping("/blogs")
public List<Blog> getAllBlogs() {
    log.debug("REST request to get all Blogs");
    return blogRepository.findByUserIsCurrentUser();
}
```

- 다음과 같이 `findByUserIsCurrentUser`로 바꿔준다.
- `Shift+ctrl+F9` Recompile

<br>

## UI 변경

- 블로그 글에서 html 태그를 기입하면 적용되게 변경하자.

<br>

### entry.component.html

```java
<td><a [routerLink]="['/entry', entry.id, 'view' ]">{{entry.id}}</a></td>
    <td>{{entry.title}}</td>
    <td [innerHTML]="entry.content"></td>
    <td>{{entry.date | date:'medium'}}</td>
```

<br>

### npm start

- `npm start`후 9000 포트로 frontend 열기


<br>

<br>

# 3. JHipster Microservice Application 실습

> ### 출처
>
> - https://www.jhipster.tech/microservices-architecture/

## JHipster with Microservices

![Diagram](https://www.jhipster.tech/images/microservices_architecture_2.png)

- **[Gateway](https://www.jhipster.tech/api-gateway/)**는 웹 트래픽을 관리하고 앵귤러/리액트 Application 제공해주는 JHipster로 생성된 Application이다.

- **[Traefik](https://www.jhipster.tech/traefik/)** 은 Gateway와 함께 작동하는 로드 밸런서이다.

- **[JHipster Registry](https://www.jhipster.tech/jhipster-registry/)** 는 모든 Application들이 등록되고 실행되는 Runtime Application이다. 실행되는 Application들을 모니터링 가능한 대시보드도 제공한다.

  - Runtime : 프로그램이 실행되고 있을 때 존재하는 곳

- **[Consul](https://www.jhipster.tech/consul/)** 은 Key/Value Store로서 서비스 탐색이 가능하다. JHipster Registry의 대안으로 사용될 수 있다.

- **[JHipster UAA](https://www.jhipster.tech/using-uaa/)** 은 JHipster의 유저 인증 / 인가 시스템이다. OAuth2 프로토콜을 사용한다.

  - 인증(Authentication) : 유저가 누구인지 확인하는 절차 / 회원가입 & 로그인
  - 인가(Authorization) : 유저에 대한 권한을 허락

- **[Microservices](https://www.jhipster.tech/creating-microservices/)** 은 JHipster로 생성되고 REST 요청을 받는  Stateless 구조의 Application들이다. 

  - **Statefull**
    - 서버가 세션의 State(상태)에 기반해 응답을 보낸다.
    - 클라이언트의 세션 정보를 서버측에 **저장한다.**
  - **Stateless**
    - 서버의 응답이 Client의 세션 State와 독립적이다.
    - 클라이언트의 세션 정보를 서버측에 **저장하지 않는다**.

- **[JHipster Console](https://github.com/jhipster/jhipster-console)**은 ELK stack기반의 모니터, 알람 콘솔이다.

  - **ELK stack**

    - 사용자가 서버로부터 원하는 모든 유형의 데이터를 가져와서 실시간으로 해당 데이터를 검색, 분석 및 시각화 할 수 있도록 도와주는 오픈소스 서비스 제품이다.

    - ELK는 수집 기능을 하는 **L**ogstash, 분석 및 저장 기능을 담당하는 **E**lasticSearch, 시각화 도구인 **K**ibana의 앞 글자만 따서 ELK Stack이라고 한다.





