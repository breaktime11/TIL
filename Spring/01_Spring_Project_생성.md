# [Spring] Project 생성해보기 

- file - new - maven project
- pom.xml에서 dependency를 통해 모듈 추가

<br>

<br>

## 1. Eclipse를 통해 생성

## applicationContext.xml (객체 생성)

xml 파일을 이용해 객체(bean)를 생성

```xml
<?xml version="1.0" encoding="UTF-8"?>

<beans xmlns="http://www.springframework.org/schema/beans"
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://www.springframework.org/schema/beans 
 		http://www.springframework.org/schema/beans/spring-beans.xsd">

	<bean id="tWalk" class="lec03Pjt001.TransportationWalk" />	//이부분만 따로 작성
</beans>
```

- Spring Container에 객체(bean)을 만들어주는 파일
- id와 class를 명시하는 `bean`태그외는 ctrl+c+v해서 사용
- `bean`태그
  - `id` : 임의로 지정
  - `class` : 빈(객체)를 생성할 클래스 지정
    - 패키지명 . 클래스 네임 
    - 객체는 Spring Container의 메모리에 로드됨

<br>

<br>

## Main Class (객체 사용)

>- **OOP 언어**에서 객체를 생성할 때는 **new** 라는 키워드를 이용해 클래스로부터 객체를 생성해 메모리에 로드해 사용함
>- **스프링**을 이용하면 applicationcontext.xml같은 **스프링 설정 파일**을 이용해 객체를 생성(메모리에 로드)하고 생성된 객체를 **getBean()**이라는 메소드를 이용해 객체를 가져와 기능을 이용 가능

<br>

xml 파일을 통해 만든 객체(bean)을 사용

- Java에서 원래 객체에 접근했던 방법

  ```java
  TransportationWalk tran = new TransportationWalk();
  tran.move();
  ```

  - 생성자를 통해 메소드 접근

- Spring에서는 **GenericXmlApplicationContext**를 사용해서 applicationcontext.xml파일에서 생성한 bean들에 접근 가능

#### <br>

```java
package testPjt02;
import org.springframework.context.support.GenericXmlApplicationContext;

public class MainClass {
	
	public static void main(String[] args) {

        // (1) Spring Container 접근
		GenericXmlApplicationContext ctx = new
            	GenericXmlApplicationContext("classpath:applicationcontext.xml");
		
        // (2) Container로부터 객체 접근
		TransportationWalk tran = ctx.getBean("tWalk", TransportationWalk.class);	
		tran.move();
		
		// (3) Resource 반환
		ctx.close();
        
	}
}
```

### (1) Spring Container 생성

#### GenericXmlApplicationContext 클래스

 : xml 을 로딩하는 클래스

```java
GenericXmlApplicationContext ctx = new
            	GenericXmlApplicationContext("classpath:applicationcontext.xml");
```

- 파라미터에 applicationcontext resource(자원)을 지정
  - resource 파라미터 : 파일 이름

<br>

### (2) Container로부터 객체 접근

```java
TransportationWalk tran = ctx.getBean("tWalk", TransportationWalk.class);
tran.move();
```

- ctx라는 Container로부터 **getBean** 메소드를 통해 객체를 가져옴
- **getBean** (id, datatype)

<br>

### (3) Resource 반환

```java
ctx.close();
```

- Java의 resource 반환 작업

<br>

<br>

## 2. Local에서 직접 Project 생성

> - 폴더 (java, resources)와 파일 (pom.xml) 생성
>
> - Eclipse에서 import