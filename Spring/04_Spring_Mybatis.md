# Spring Framework + DB

## 1. 환경설정

### (1) 프로젝트 생성

- file - new - spring legacy project - Spring MVC project - com.mycompany.myapp - finish

<br>

### (2) DB 연동 설정

#### pom.xml

- DB 연동 라이브러리

```xml
<!-- ##### (추가) MyBatis : 시작 ##### -->
<!-- MyBatis -->
<dependency>
    <groupId>org.mybatis</groupId>
    <artifactId>mybatis</artifactId>
    <version>3.4.4</version>
</dependency>

<!-- MyBatis 스프링 연동 -->
<dependency>
    <groupId>org.mybatis</groupId>
    <artifactId>mybatis-spring</artifactId>
    <version>1.3.1</version>
</dependency>

<!-- JDBC -->
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-jdbc</artifactId>
    <version>4.3.10.RELEASE</version>
</dependency>

<!--MyBatis와 스프링이 정상적으로 연동되었는지 확인 -->
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-test</artifactId>
    <version>4.3.10.RELEASE</version>
    <scope>test</scope>
</dependency>
<!-- ##### (추가) MyBatis : 종료 ##### -->
```

<br>

#### web.xml

- WAS에 해당 / POST 방식 한글 처리

```xml
<!--#####  (추가) 한글 처리 : Start ##### -->
<filter>
    <filter-name>encodingFilter</filter-name>
    <filter-class>org.springframework.web.filter.CharacterEncodingFilter</filter-class>
    <init-param>
        <param-name>encoding</param-name>
        <param-value>UTF-8</param-value>
    </init-param>
    <init-param>
        <param-name>forceEncoding</param-name>
        <param-value>true</param-value>
    </init-param>
</filter>
<filter-mapping>
    <filter-name>encodingFilter</filter-name>
    <url-pattern>/*</url-pattern>
</filter-mapping>
<!--#####  (추가) 한글 처리 : End ##### -->
```

<br>

#### root-context.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://www.springframework.org/schema/beans https://www.springframework.org/schema/beans/spring-beans.xsd">
	
	<!-- Root Context: defines shared resources visible to all other web components -->
	
	<!--##### (추가) DataSource : 시작 ##### -->
	<!-- 
		# DataSource
		* pom.xml의 spring-jdbc 사용
		* 기능
			- 데이터베이스 연결(Connection)
			- Connection Pool 
	-->
	<bean id="dataSource" class="org.springframework.jdbc.datasource.DriverManagerDataSource">
		<property name="driverClassName" value="oracle.jdbc.driver.OracleDriver" />
		<property name="url" value="jdbc:oracle:thin:@localhost:1521:XE" />
		<property name="username" value="hr" />
		<property name="password" value="hr" />
	</bean>
	<!--##### (추가) DataSource : 종료 ##### -->

	<!--##### (추가) MyBatis-Spring 연동 : 시작 ##### -->
	<!-- 
		# SqlSessionFactoryBean
		* Spring 이므로 SqlSessionFactoryBean 사용. 순수 MyBatis라면, SqlSessionFactoryBulider 사용
		* 기능
			- SqlSessionFactory 생성
			- SqlSessionFactory는 SqlSession을 생성
	 -->
	<bean id="sqlSessionFactory" class="org.mybatis.spring.SqlSessionFactoryBean">
		<property name="dataSource" ref="dataSource" />
		<property name="configLocation" value="classpath:/mybatis-config.xml" /><!-- Mybatis 설정 -->
		<property name="mapperLocations" value="classpath:/mappers/**/*Mapper.xml" /><!-- SQL 작성 -->
	</bean>

	<!-- 
		# SqlSessionTemplate
		* sqlSession 구현 객체. Thread-safe. 
		* 기능
			- SQL 실행. 트랜잭션 관리
	-->
	<bean id="sqlSession" class="org.mybatis.spring.SqlSessionTemplate" destroy-method="clearCache">
		<constructor-arg name="sqlSessionFactory" ref="sqlSessionFactory"></constructor-arg>
	</bean>
	<!--##### (추가) MyBatis-Spring 연동 : 종료 ##### -->
		
</beans>
```

- `dataSource` : DB 정보
- 내부적으로 JDBC 기술 사용

<br>

#### servlet-context.xml

```xml
<!-- ##### (추가) 이미지, CSS, 자바스크립트 파일 설정 : Start ##### -->
<!-- 이미지, CSS, 자바스크립트는 화면에서 <c:url value> 를 이용하여 사용한다. -->
<resources mapping="/images/**"  location="/resources/images/" />
<resources mapping="/css/**"  location="/resources/css/" />
<resources mapping="/js/**"  location="/resources/js/" />
<!-- ##### (추가) 이미지, CSS, 자바스크립트 파일 설정 : End ##### -->
```

<br>

#### WEB-INF > lib 폴더 생성

- `ojdbc6.jar` 붙여 넣기
- jdbc 파일



<br>

## (3) Mybatis vs JDBC

### JDBC

 DB를 연동해서 데이터를 가져오고 처리

- Connection : DB 연결
- `SQL 처리`
- Resultset : 결과
- 코드가 굉장히 길고 복잡함 (try-catch 필요)
- SQL 문도 다 만들어서 처리해야함
- 기 코드가 자바안에 다 들어가서 코드 길이가 길어짐

<br>

### MyBatis

JDBC에서 `SQL 처리` (쿼리 처리) 부분을 간단하게 만들어줌

- SQL을 `xml`에 설정
- xml을 읽어서 DB에 처리할 수 있게 해줌
- 쿼리 처리, 트랜잭션 알아서 처리해줌
- **쿼리 관련된 실행 부분**을 좀 더 **편리**하게 사용하기 위해서 사용함
- JDBC의 일부분을 MyBatis가 담당

<br>

<br>

## (4) root-context 처리

### root-context.xml

```xml
<bean id="sqlSessionFactory" class="org.mybatis.spring.SqlSessionFactoryBean">
    <property name="dataSource" ref="dataSource" />
    <property name="configLocation" value="classpath:/mybatis-config.xml" />
    <!-- Mybatis 설정 -->
    <property name="mapperLocations" value="classpath:/mappers/**/*Mapper.xml" />
    <!-- SQL 작성 -->
</bean>
```

- /mappers/ 폴더 아래로 설정되어있으므로 mappers 폴더를 생성해야함

<br>

### SQL 작성

#### src/main/resources > mappers 폴더 생성

- 폴더 내에 `OOOMapper.xml` 을 넣어둠
  - `OOOMapper.xml` : xml 기본 양식

<br>

##### OOOMapper.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE mapper
  PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
  "http://mybatis.org/dtd/mybatis-3-mapper.dtd">

<mapper namespace="OOOMapper">

	
</mapper>
```

<br>

### Mybatis 설정

#### src/main/resources > mybatis-config.xml 넣기

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE configuration
    PUBLIC "-//mybatis.org//DTD Config 3.0//EN"
    "http://mybatis.org/dtd/mybatis-3-config.dtd">

<configuration>

</configuration>
```

<br>

### Server GET 방식 한글 처리

#### Servers > server.xml 추가

```
<Connector connectionTimeout="20000" port="80" protocol="HTTP/1.1" redirectPort="8443" URIEncoding="UTF-8"/>
```

<br>

<br>

## 2. 실습

## (1) MVC 구조

### Model
  - **Service**
    - Controller의 거대한 메소드를 기능별로 모듈화해 개발 가능
      - ex) Card() , 잔고(), 가맹점()
  - **DAO** (Data Access Object)
    - Service의 기능을 쪼개서 세분화시켜 개발
      - ex) 사용자 체크
  - **DTO** (Data Transfer Object) / VO
      - DB의 각 컬럼을 클래스화해서 사용 (VO:Value Object 라고도 부름)
    - Bean (Setter ,Getter)
### View
  - jsp
### Controller

- 사용자의 요청이 진입하는 지점 (entry point)
- Reqeust에 따른 어떤 처리를 할지 *결정*해줌
- 사용자에게 View를 Response 해줌

<br>

<br>

## (2) 프로젝트 구조

>- I로 시작하는 인터페이스 클래스
>- 인터페이스를 implement 받는 구현 클래스

<br>

<br>

## Controller

- src.main.java.com.mycompany.mapp.guestbook.controller > Controller 생성

#### GuestBookController.java

```java
@Controller
public class GuestBookController {
	
	@Autowired
	private GuestbookServiceImpl guestbookServiceImpl;	//주입 서비스 객체
	
	@RequestMapping(value="/index")
	public String index() {
		return "guestbook/index";
	}
	
   //방명록 전체목록 조회
   @RequestMapping(value = "/selectGuestbookAllList")
   public String selectGuestbookAllList(Model model) {
      
	   List<GuestbookDto> guestbookList = guestbookServiceImpl.selectGuestbookAllList();
	   model.addAttribute("list", guestbookList);
	   
       return "guestbook/selectGuestbookAllList";
   }
}
```

<br>

## DAO

### IGuestbookDao

```java
public interface IGuestbookDao {	
	public List<GuestbookDto> selectGuestbookAllLIst();
}
```

<br>

### GuestbookDaoImpl

```java
@Repository
public class GuestbookDaoImpl implements IGuestbookDao{
	private SqlSessionTemplate sqlSession;
	
	@Override				  
	public List<GuestbookDto> selectGuestbookAllList() {
		List<GuestbookDto> GuestbookDtoList = new ArrayList<GuestbookDto>();
		
		return GuestbookDtoList;
	}
}
```

- `@Repository` : Spring Framework에게 DAO임을 알려줌
- `SqlSessionTemplate` : 정해진 SQL 문을 찾아서 실행하고 결과를 가져옴
- DTO(DB) 접근

<br><br>

## DTO

### GuestbookDto

```java
public class GuestbookDto {
	private int seq;
	private String name;
	private String addr;
	private char gender;
	private String regdate;
	
	public GuestbookDto() {}

	// getters & setters
}
```

- DB의 Table과 동일
- 하나의 레코드가 하나의 객체로 형성됨

<br>

<br>

## Service

### IGuestbookService

```java
package com.mycompany.myapp.guestbook.service;
import java.util.List;
import com.mycompany.myapp.guestbook.dto.GuestbookDto;

public interface IGuestbookService {
	// Guest 전체 목록 조회
	public List<GuestbookDto> selectGuestbookAllList();
}
```

<br>

### GuestbookServiceImpl

```java
@Service
public class GuestbookServiceImpl implements IGuestbookService{
	@Autowired
	private GuestbookDaoImpl guestbookDaoImpl;

	@Override
	public List<GuestbookDto> selectGuestbookAllList() {
		return guestbookDaoImpl.selectGuestbookAllList();
	}
}
```

- DAO를 거쳐 DTO를 사용함





