# 마이크로 서비스 아키텍처와 모놀리틱 아키텍쳐

> **아키텍처** :  시스템 구성과 동작원리 그리고 시스템의 구성환경등을 설명 및 설계하는 청사진 또는 설계도
>
> <br>
>
> ### 출처
>
> - https://sabarada.tistory.com/50
> -  https://neos518.tistory.com/100
> - http://guruble.com/마이크로서비스microservice-아키텍처-그것이-뭣이-중헌디
> - https://www.redhat.com/ko/topics/devops/what-is-ci-cd

![Prologue - guide](https://gblobscdn.gitbook.com/assets%2F-LE8_fwLnI2gUuguYTDU%2F-LH6l3KoYH7hthyWqBvj%2F-LH6l4H0EWQvNC1mq4_P%2Fmonolithic-vs-microservice.png?alt=media)

## 1. 모놀리틱 아키텍쳐란?

- *모놀리틱 아키텍처란*  비즈니스 로직, DB, UI 등을 하나의 패키지에 담아 빌드하고 배포하는 아키텍처이다.
- 마이크로서비스 아키텍처의 반대 개념
- **장점** : 빠르고 쉽게 서비스를 구성할 수 있어 적은 비용으로 서비스를 출시 가능

<br>

## 2. 모놀리틱 아키텍처의 한계

코드가 많아지고 복잡해짐에 따라 모놀리틱의 아키텍처의 한계점이 드러난다.

- **부분장애**가 **전체** 서비스의 **장애로 확대**될 수 있다.
- 소스코드의 **수정**이 어렵다.
  - 여러 컴포넌트가 하나의 서비스에 강하게 결합되어 있기 때문에 서비스 수정에 대한 영향도 파악이 어려워 수정 개발기간의 지연을 야기한다.
  - 소스코드 테스트를 위한 비용↑
- 한 Framework와 언어에 **종속적**이다.
  - 새로운 기술의 적용이 어렵다. 예를 들어 블록 체인은 주로 Node.js를 많이 사용하는데 Spring Framework를 사용한다면 Java로 만들어야한다.

<br>

### 새로운 아키텍처의 필요성

1. 코드 구조의 독립성
2. 기능별 분산된 구조
3. 기능별 최적화된 기술 적용 가능

<br>

<br>

## 3. 마이크로 서비스 아키텍처란?

![img](https://k.kakaocdn.net/dn/qusaI/btqAKud2cq2/1gPKB9eJ1cRgYtPn1LorOk/img.png)

- *마이크로서비스 아키텍처란*  하나의 큰 애플리케이션을 여러 개의 작은 애플리케이션으로 쪼개어 변경과 조합이 가능하도록 만든 아키텍처이다.
- 어플리케이션을 **핵심기능** 별로 세분화하고 각 기능을 **서비스**라고 부르며, 독립적으로 구축하고 배포할 수 있다.
- 서비스는 각자 별도의 **프로세스**에서 실행되며, **HTTP 자원 API** 같은 가벼운 매커니즘으로 통신하며 하나의 어플리케이션을 만든다. 
  - 각자 가진 네트워크 기능으로 통신할 수 있다.
- 서비스들은 각자의 비즈니스 기능을 담당하고 완전 자동화된 절차에 따라 **독립적으로 배포** 가능하다.
  - 서로 다른 프로그래밍 **언어**나 서로 다른 **DB**를 사용할 수도 있다

<br>

### 언제 적용해야할까?

MSA는 어느정도 트래픽이 나오고 서비스가 잘 되었을때 사용해야 한다. 어느 정도 규모가 있어야 유지보수 비용이 줄어들기 때문에 모든 프로젝트에 적합하지는 않다.

<br>

### 장점

- 부하가 집중되는 특정 서비스를 자원을 할당해 스케일 아웃할 수 있기 때문에 **효율적인 자원 사용**이 가능하다.
  - 스케일 아웃 : 서버의 개수를 늘려 서버의 처리 능력을 향상시키는 것
  - 스케일 업 : 서버 자체의 성능을 증가시키는 것 / 고성능의 서버로 변경
- 서비스의 변경이 다른 서비스에 영향을 미칠 가능성이 적다
- 서비스 단위로 **독립적인 배포가 가능**하다
- 시스템의 아키텍처가 개발 조직과 나아가서 회사의 조직 문화에 큰 영향을 미친다.
  - 특정 서비스의 개선과 수정 작업이 다른 서비스의 이해 당사자들과 독립적으로 진행될 수 있다.
  - 따라서  의사결정이 빠르고, 독립적인 테스트의 구축이 용이하기 때문에 품질이 증가한다.

<br>

### 단점

- 서비스 간의 통신에 대한 처리가 추가적으로 필요하다
  - 코드의 양이 늘어나고사용자의 요청을 처리하기 위한 응답속도 또한 증가한다.

- 공유 자원 접근이 어렵다.
  - 각 서비스가 독립된 저장소를 갖고 있기 때문에 서비스들끼리 자원을 공유하고 접근하는 것을 구현하기가 어렵고 제약조건도 있다.

- 배포와 실행이 복잡하다.
  - 모놀리틱에서는 하나의 프로세스로 실행이 가능했지만, 마이크로서비스는 복잡한 실행 과정을 거쳐야한다. 따라서 모든 서비스들을 한꺼번에 배포하고 실행시키기 위해서는 배포 자동화 과정을 거쳐야만한다.

<br>

## 4.배포 자동화

배포 자동화란 버튼만 누르면 테스트 및 프로덕션 환경에 소프트웨어를 배포할 수 있는 것을 말한다.

빌드 스크립트(.travis.yml, circle.yml, buildspec.yml 등)에 따라 명령어들을 실행한다

<br>

### CI와 CD

애플리케이션 개발 단계를 [자동화](https://www.redhat.com/ko/topics/automation/whats-it-automation)하여 애플리케이션을 보다 짧은 주기로 고객에게 제공하는 방법

- **CI(Continuous Integration)**
  - 개발자를 위한 자동화 프로세스인 지속적인 통합(Continuous Integration)을 의미
  - CI를 성공적으로 구현할 경우 애플리케이션에 대한 새로운 코드 변경 사항이 정기적으로 빌드 및 테스트되어 공유 / 리포지토리에 통합되므로 
  - 여러 명의 개발자가 동시에 애플리케이션 개발과 관련된 코드 작업을 할 경우 서로 충돌할 수 있는 문제를 해결할 수 있다.
- **CD(Continuous Deployment)**
  - 지속적인 서비스 제공(Continuous Delivery) 및/또는 지속적인 배포(Continuous Deployment)를 의미
  - 지속적인 *제공*이란 개발자들이 애플리케이션에 적용한 변경 사항이 버그 테스트를 거쳐 리포지토리(예: [GitHub](https://redhatofficial.github.io/#!/main) 또는 컨테이너 레지스트리)에 자동으로 업로드되는 것을 뜻한다.
  - 지속적인 *배포*(또 다른 의미의 "CD": Continuous Deployment)란 개발자의 변경 사항을 리포지토리에서 고객이 사용 가능한 프로덕션 환경까지 자동으로 릴리스하는 것을 의미

<br>

<br>

## 5. API Gateway

![6](http://guruble.com/wp-content/uploads/2016/08/6.png)

-  *API Gateway란* 서비스로 전달되는 모든 **API 요청의 관문(Gateway) 역할**을 하는 서버이다.
- 시스템의 아키텍처를 내부로 숨기고 외부의 요청에 대한 응답만을 적합한 형태로 응답한다.
- 클라이언트는 시스템 내부의 아키텍처를 알 필요가 없으며 서로 약속한 형태의 API 요청만을 서버로 보내면 알맞는 형태의 결과를 받을 수 있다.

<br>

### 장점

- 시스템 내부의 아키텍처를 숨길 수 있는(encapsulate) 특성
  - 특정 서비스가 변경되더라도 클라이언트가 인지할 필요 없이 API Gateway 내부 변경만으로 처리가 가능하다.

<br>

### 과정

- 사용자의 HTTP Request는 API Gateway에 먼저 도달
- API Gateway는 사용자의 HTTP Request를 마이크로서비스가 받을 수 있는 다른 형태의 **프로토콜**로 전환시킴

<br>

### 역할

- 라이언트의 요청을 일괄적으로 처리

- 전체 시스템의 부하를 분산시키는 로드 밸런서의 역할
- 요청에 대한 불필요한 반복작업을 줄일 수 있는 캐싱
- 시스템상을 오고가는 Request, Response 모니터링

<br>

<br>

## JHipster란?

- JHipster = **Java Hipster**
- JHipster는 스프링 부트를 기반으로 프로젝트의 골격을 만들어 줄 수 있는 자바 기반의 개발 플랫폼이다.
  - server side와 frontend를 한꺼번에 생성
- 그 중 **마이크로서비스** 어플레키이션을 쉽고 빠르게 만들어 줄 수 있는 기능을 제공한다.
  - netflix OSS
  - ELK stack
  - docker
- yeoman, webpack, maven으로 애플리케이션을 생성한다.



<br>

## JHipster가 제공하는 기술

![image-20200701185200055](C:\Users\slsle\AppData\Roaming\Typora\typora-user-images\image-20200701185200055.png)

<br>

## JHipster의 장점

![image-20200701185253386](C:\Users\slsle\AppData\Roaming\Typora\typora-user-images\image-20200701185253386.png)

- Cloud-Native Application을 생성할 수 있다.
- 쉽고 빠르게 Docker나 Kubernetes를 사용할 수 있다.





<br>

## Install JHipster

> https://www.youtube.com/watch?v=uQqlO3IGpTU&feature=emb_title

1. Install Java 11

2. Install Git

3. Install Node.js

4. Install JHipster

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

- Port 8080 already in use 에러 → port kill
  
  ```
  
  ```
- netstat -o -an
  - taskkill /f /pid 프로세스id
  ```
  
  ```
  
- localhost:8080 들어가면 생성된 페이지 확인 가능

![image-20200701171253199](C:\Users\slsle\AppData\Roaming\Typora\typora-user-images\image-20200701171253199.png)

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

- 위를 복사하고 git bash를 열어서 `vi  blog.jdl` 후 붙여넣기

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

![image-20200701171307116](C:\Users\slsle\AppData\Roaming\Typora\typora-user-images\image-20200701171307116.png)

- `Entities` - `Blog` 들어가면 Entity가 정상적으로 추가되고 샘플 데이터도 들어있는 것을 확인할 수 있다.

![image-20200701171541428](C:\Users\slsle\AppData\Roaming\Typora\typora-user-images\image-20200701171541428.png)

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

![image-20200701172028711](C:\Users\slsle\AppData\Roaming\Typora\typora-user-images\image-20200701172028711.png)

- 샘플 데이터가 없어진 것을 확인할 수 있다

<br>

<br>

## Business Logic 바꾸기

- `Entities` - `Blog`에서 블로그 생성 가능
- `Entities` - `Entry` 에서 글 생성 가능

<br>

![image-20200701172538262](C:\Users\slsle\AppData\Roaming\Typora\typora-user-images\image-20200701172538262.png)

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

  



- 