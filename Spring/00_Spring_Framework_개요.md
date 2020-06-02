# [Spring] Spring Framework 개요

## 1. 스프링 프레임워크란?

### (1) 프레임워크

프레임워크란 개발자들이 어떠한 **기능을 구현**하기 위해 **추상적**으로 정리해 놓은 **틀**을 의미한다

- 자바를 이용하는 대표적인 프레임워크 2가지
  1. 스프링 프레임워크
  2. 안드로이드 프레임워크
- 스프링 프레임워크 : DI, AOP, MVC, JDBC 등을 제공해주는 웹이나 보안 등에서 많이 사용되는 프레임워크

<br>

### (2) 스프링 프레임워크 주요 기능

1. **DI** (Dependency Injection)

2. **AOP**
   - 관점 지향 프로그래밍
   - 개발자들은 주요 업무만 공통적인 요소는 따로 모아놔 붙였다 떼었다 할 수 있다.

3. **MVC**

4. **JDBC** (Java Data Base Connector)
   - 자바에서 데이터베이스에 접근해 통신 후 데이터베이스의 데이터를 이용

<br>

<br>

## 2. 스프링 프레임워크의 모듈

- 스프링은 **모듈을 지원**해주는 프레임워크

- 프레임워크가 제공하는 추상적인 **틀** 하나하나가 모듈이다
- 모듈은 코드로 구성되어있는 라이브러리라고 볼 수 있다
- 스프링 프레임워크의 기능은 **모듈화**되어있다

- 스프링 프레임워크의 모듈을 사용하려면 **모듈에 대한 의존 설정**을 **XML 파일** 등을 이용해 직접 해야한다
  - 필요한 모듈들을 XML 파일에 명시해서 사용한다

<br>

1. spring-core
   - DI(Dependency)와 IoC(Inversion of Control) 제공
2. spring-aop
   - AOP 구현 기능 제공
3. spring-jdbc
   - JDBC - DB 다룰 수 있는 기능 제공
4. spring-tx
   - 트랜잭션 관련 기능 제공
5. spring-webmvc
   - 스프링의 Controller, View를 이용한 스프링 MVC 구현 기능 제공

<br>

<br>

## 3. 스프링 컨테이너 (IoC)

스프링에서 객체를 생성하고 조립하는 **컨테이너(Container)**로 컨테이너를 통해 생성된 객체를 **빈(Bean)**이라고 부른다.

1. XML 문서 등을 이용해 속성 데이터 작성 및 객체생성
2. Spring Container
   - **Spring Container** : XML 문서에서 만들어진 **Bean(객체)들을 담고 있는 큰 그릇**
3. 자바 문서
   - 애플리케이션에서 구현

<br>

<br>

## 4. 스프링 프로젝트 생성

> - Maven 빌드툴을 이용해 스프링 프로젝트 생성
> - pom.xml 파일

<br>

### (1) xml 파일

필요한 모듈을 가져오는 파일

```xml
<dependencies>
    <dependency>
        <groupId>org.springframework</groupId>
        <artifactId>spring-context</artifactId>
        <version>4.1.0.RELEASE</version>
    </dependency>

</dependencies>


<build>
    <plugins>
        <plugin>
            <artifactId>maven-compiler-plugin</artifactId>
            <version>3.1</version>
            <configuration>
                <source>1.8</source>
                <target>1.8</target>
                <encoding>utf-8</encoding>
            </configuration>
        </plugin>
    </plugins>
</build>
```

- Maven Problems (Project configuration is not up-to-date with pom.xml)
  - JRE 라이브러리 버전과 메이븐 설정 파일이 맞지 않아서 일어나는 오류
  - 프로젝트 우클릭 → Maven → Update Project

<br>

### (2) 메이븐(maven)이란?

- 메이븐이란 프로젝트에서 외부 라이브러리를 쉽게 연결하기 위해 사용하는 빌드 도구
- 과거에는 라이브러리 jar파일을 직접 다운로드 후 import 시켜줌
- 메이븐을 사용하면 pom.xml 파일에 dependency 태그를 추가하면 라이브러리에 필요한 jar파일들을 자동으로 다운 후 import 시켜줌

<br>

### (3) pom.xml 파일

- **메이븐 설정파일**
- pom.xml파일의 열할 : 스프링 프로젝트에 필요한 모듈들을 외부의 메인 repository에 있는 라이브러리들로 부터 다운로드해서 사용할 수 있게 해주는 파일
- 메이븐 : 라이브러리를 연결해주고 빌드를 위한 플랫폼

<br>

<br>

## 5. 스프링 프로젝트의 구조

**project** 폴더 : root

​		└ **src** 폴더

​			└ **main** 폴더

​					└ **java** 폴더 : java 파일 관리 / java를 이용해 기능 구현(프로그래밍)을 해나가는 부분

​							└ **resources** 폴더 : 자원 파일 관리 XML 등 / java 프로그래밍 하면서 필요하는 보조적인 파일들

<br>



