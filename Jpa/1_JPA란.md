인프런 김영한님의 자바 ORM 표준 JPA 프로그래밍 - 기본편 강의를 수강하면서 기록한 글입니다.



# **✔️ JPA는 왜 사용하는가**

- SQL 중심적인 개발에서 객체 중심으로 개발하기 위해
- 생산성 향상
- 유지보수 용이
- 객체와 관계형DB의 패러다임의 불일치 해결
- 성능 최적화 기능



## **(1) SQL 중심적인 개발의 문제점**

과거에는 객체를 관계형 DB (Oracle, MySQL 등)에 저장하기 위해서 개발자가 일일이 SQL문을 작성했다. 그러다보니 동일한 CRUD 코드가 반복되거나, 테이블에 컬럼 하나만 추가되어도 모든 SQL문을 수정해야하는 상황이 빈번했다.



SQL에 의존적인 개발은 개발 생산성을 저하시키고, 유지보수를 어렵게 만들었다. SQL 중심적인 개발의 문제점은 다음과 같다.

- CRUD와 같은 코드가 반복됨 : 생산성 저하
- 객체지향적인 개발을 하기 어려움
  - 자유로운 객체 그래프 탐색이 어려움
  - 이에 따른 엔티티에 대한 신뢰 문제가 발생함
- 진정한 의미의 계층 분할이 어려움

이러한 문제들로 인해 SQL 중심적인 개발의 한계가 드러났고, 그에 따라 객체 중심 개발을 위한 **ORM 기술의 필요성**이 대두되었다.



## **(2) 생산성 향상**

```
jpa.persist(user)            // 저장
User user = jpa.find(userId) // 조회
user.setNAme("dsunni")       // 수정
jpa.remove(user)             // 삭제
```

JPA는 위와 같이 CRUD가 미리 정의되어있기 때문에 반복적인 작업을 간단히 할 수 있다.



## **(3) 유지보수 용이**

기존에는 테이블에 컬럼 하나가 추가되면 관련된 SQL문을 한꺼번에 수정해야했다. JPA는 객체에 필드를 하나 추가해주면 알아서 수정되기 때문에 유지보수에 용이하다.



## **(3) 패러다임의 불일치 해결**

관계형 데이터베이스는 데이터 중심으로 구조화해 데이터를 잘 보관하는 것이 목적이다. 반면 객체지향적 프로그래밍은 객체에 필드, 메소드 등을 캡슐화하여 상호작용 하는 것이 목적이다.



**패러다임의 불일치**는 이렇게 객체과 관계형 데이터베이스가 지향하는 점이 다르기 때문에 일어난다.





## **패러다임 불일치 사례** (객체와 관계형 DB의 차이점)

### **(1) 상속관계**

![img](https://blog.kakaocdn.net/dn/drTrjc/btq7OCSGFqY/j1k7v8tsXsIU28n1yxBkB0/img.png)출처 : 강의 자료

테이블 : 상속의 기능 X 슈퍼타입 서브타입이 그나마 유사한 관계

\- 자식타입을 저장, 조회하고 싶으면 두 SQL을 만들어야해해서 번거로움 → **패러다임 불일치의 비용**

```
# 저장
INSERT INTO ITEM ...
INSERT INTO ALBUM...

# 조회
각각의 테이블 JOIN 후 객체 따로 생성 ...
```

객체 : 상속의 기능 O

\- 자바 컬렉션에서 저장, 조회하듯이 간단히 부모와 자식 타입을 저장, 조회 가능

```
// 저장
list.add(album);

// 조회
Album album = list.get(albumId);
Item item = list.get(albumId);
```

###  

### **연관관계**

![img](https://blog.kakaocdn.net/dn/uLGF3/btq7QO5ST7Z/fskC4G3N7Bkxgn15ub6KI1/img.png)출처 : 강의 자료

테이블 : **외래 키**를 사용

- JOIN ON U.TEAM_ID = T.TEAM_ID
- 테이블은 양방향으로 흐름 user ↔ team

객체 : **참조**를 사용

- user.getTeam()
- 객체는 한 방향으로 흐름 user → team



### **데이터 타입**

테이블에 맞추어 객체 모델링

```
class User {
 String id; //USER_ID 컬럼 사용
 Long teamId; //TEAM_ID FK 컬럼 사용
 String username;//USERNAME 컬럼 사용
}
class Team {
 Long id; //TEAM_ID PK 사용
 String name; //NAME 컬럼 사용
}
```

문제점은 teamId 필드이다. 객체는 **참조**를 사용해 연관된 객체를 조회할 수 있는데 위와같이 teamId를 그대로 저장하면 참조를 사용할 수 없다.



객체다운 모델링

```
class User {
 String id; //USER_ID 컬럼 사용
 Team team; //참조로 연관관계를 맺는다. //**
 String username;//USERNAME 컬럼 사용

 Team getTeam() {
 return team;
 }
}
class Team {
 Long id; //TEAM_ID PK 사용
 String name; //NAME 컬럼 사용
}
```

이제 Team team = user.getTeam(); 와 같이 참조를 통해 연관된 객체를 찾을 수 있다.





### **객체 그래프 탐색**

![img](https://blog.kakaocdn.net/dn/cqTTg7/btq7NzB99Cd/20aKsWkqmBdRW6HJNUmpF1/img.png)출처 : 강의자료

객체는 자유롭게 객체 그래프를 탐색할 수 있어야 한다.

하지만 테이블은 처음 실행하는 SQL문에 따라 탐색 범위가 결정되기에 그 범위에 넘어서는 객체의 정보는 못가지고 온다.

예를 들어 SQL문으로 User와 Team 테이블을 조인한 후 user.getTeam()을 하면 정상적으로 team 객체를 가져올 수 있지만 user.getOrder()와 같이 탐색 범위에 벗어나는 조회를 할 시에는 null이된다.

이렇게 객체 그래프가 어디까지 탐색이 가능한지 코드만으로 알 수 없기 때문에 **엔티티 신뢰도 문제**가 발생할 수 있다.



반면 JPA는 **lazy loading**으로 연관된 객체를 실제로 사용할 때 적절한 조회 SQL문을 실행한다. 따라서 JPA는 객체 그래프를 자유롭게 탐색할 수 있으며 엔티티 신뢰 문제가 발생하지 않는다.





### **데이터 식별 방법 (비교)**

객체는 동일성 비교와 동등성 비교가 있다.

**동일성 비교**는 ==을 사용해 객체의 인스턴스 주소 값을 비교한다.

**동등성 비교**는 equals() 메소드를 사용해 객체 내부의 실제 값을 비교한다.

```
String userId = "100";
User user1 = userrDAO.getUser(userId);
User user2 =userDAO.getUser(userId);
user1 == user2; //다르다.

class UserDAO {

 public User getUser(String userId) {
 String sql = "SELECT * FROM USER WHERE USER_ID = ?";
 ...
 //JDBC API, SQL 실행
 return new User(...);
 }
}
```

SQL문을 사용해 같은 userId로 user 객체를 조회했을 때 user1와 user2는 다르다.

getUser(userId)를 호출할 때마다 **새로운 인스턴스를 생성**하기 때문에 인스턴스 주소값이 달라 동일성 비교에 실패한다.



```
String userId = "100";
User user1 = list.get(userId);
User user2 = list.get(userId);
user1 == user2; //같다.
```

반면 JPA에서는 **동일한 트랜잭션**에서 조회한 객체는 같은 객체임을 보장한다.

점점 객체답게 모델링 할수록 패러다임 불일치로 인해 개발자의 매핑 작업만 늘어난다. JPA는 객체를 자바 컬렉션에 저장하듯이 DB에 저장시켜줘 이러한 문제들을 해결해준다.





------



# ✔️ JPA란

- Java Persistence API
- 자바 진영의 **ORM 기술 표준**
- JPA는 인터페이스의 모음
- JPA 표준 명세를 구현한 구현체 : **Hibernate**



## ORM

- Object Relation Mapping (객체 관계 매핑)
- 대부분의 언어가 존재
- 객체는 객체대로, 관계형 DB는 관계형 DB대로 설계하면 ORM 프레임워크가 중간에 매핑해줌
- ORM은 **객체와 RDB 두 기둥 위에 있는 기술**



## JPA의 동작

![img](https://blog.kakaocdn.net/dn/boGPGo/btq7P8X54fK/H0JSQ6WfFrn609s2O0vMYK/img.png)출처 : 강의자료

JPA는 애플리케이션과 JDBC 사이에서 동작한다.



### 저장

![img](https://blog.kakaocdn.net/dn/1rnF8/btq7Ma3cxko/TJSFT2KFVXaieq3RiOifxk/img.png)출처 : 강의자료

UserDAO에서 객체를 저장하고자함

1. User 객체를 넘기면
2. JPA가 User 객체를 분석 후 적절한 Insert 쿼리 생성 후 JDBC API를 사용해서 DB에 쿼리를 보냄
3. 결과를 받음
4. 패러다임 불일치 해결



### 조회

![img](https://blog.kakaocdn.net/dn/kWxSP/btq7JRCPxRf/scQrLualJ0wlAYcnHBuxu0/img.png)출처 : 강의자료

UserDAO 객체를 조회하고자함

1. JPA가 User 객체를 보고 적절한 SELECT SQL 생성
2. JDBC API를 사용해 결과를 보내고 ResultSet 매핑
3. 결과를 받음
4. 패러다임 불일치 해결



## JPA의 성능 최적화 기능

### 1차 캐시와 동일성 보장

- 캐싱 기능
- 같은 트랜잭션 안에서는 같은 엔티티를 반환 -> 약간의 조회 성능 향상
- DB Isolation Level이 Read Commit이어도 애플리케이션에서 Repeatable Read 보장



### 트랜잭션을 지연하는 쓰기 지연 (Transactional Write-behind)

- 버퍼링 기능
- 트랜잭션을 커밋할 때까지 INSERT SQL 모음
- 커밋하는 순간 JDBC Batch SQL 기능을 사용해 한꺼번에 SQL 전송



### 지연 로딩 (Lazy Loading)

- 객체가 실제 사용될 때 로딩
- 네트워크를 두번 탐



### 즉시 로딩

- Join SQL로 한번에 연관된 객체까지 미리 조회