# 📲로컬 Oracle DB를 AWS RDS로 옮기기

![14](https://user-images.githubusercontent.com/65323733/86904611-ef511d80-c14b-11ea-87c1-81df8b7d5168.png)

> 두달 간의 교육이 끝나 드디어 저번 주 금요일에 학원을 수료했다.👏🏻👏🏻
>
> 하지만 수료와는 별개로 SSGSO 프로젝트에 많은 아쉬움이 남는다. 추가하고 싶은 기능들 뿐만 아니라 마지막에 급하게 머지하다보니 온갖 에러가 다 떠서 고치고 싶은 부분도 많기 때문이다. 따라서 완성하고 싶은 사람들끼리 프로젝트를 이어서 진행하기로 했다.
>
> 다음주 부터 본격적으로 시작할 예정이라 학원 컴퓨터를 서버로 두고 있던 DB를 AWS RDS로옮기기로 했다. 
>
> 이 글은 다음 과정의 기록이다.
>
> <br>
>
> ### 목차
>
> 1. SQL Developer를 이용한 DB export
> 2. AWS 프리티어로 RDS Oracle 생성
> 3. SQL Developer와 AWS RDS를 연결
> 4. 복사해둔 DB Script 실행
> 5. Spring 프로젝트와 AWS RDS 연결

<br>

<br>

## 1. SQL Developer를 이용한 DB export

>  프로젝트의 데이터가 작았기 때문에 SQL Developer를 통해 간단히 export 가능하다.

<br>

### (1) 익스포트 마법사 실행

- `도구(T)` → `데이터베이스 익스포트(X)` 선택

![1](https://user-images.githubusercontent.com/65323733/86904679-02fc8400-c14c-11ea-843c-7b1dcd350e83.PNG)

- 접속 DB 선택

- **스키마 표시**는 옮기려 하는 DB의 스키마가 다를 수 있기 때문에 해제하는게 좋다.

  - 체크시 아래와 같이 스크립트가 생성되기 때문이다.

  ```sql
  CREATE TABLE "SSGSO"."ACCOMODATION"
  ```

- 파일의 찾아보기를 클릭해 경로 설정

<br>

### (2) 익스포트할 유형 체크

![2](https://user-images.githubusercontent.com/65323733/86904697-0a239200-c14c-11ea-8297-d53e1a290940.PNG)

- 익스포트할 유형을 체크하면 된다. 다 체크했다.

<br>

### (3) 객체 지정

![3](https://user-images.githubusercontent.com/65323733/86904729-127bcd00-c14c-11ea-9de1-7602f9b1a74d.PNG)

- `조회(K)`를 눌러 복사하고싶은 모든 객체들을 선택한다.
- 전부 다 옮기려면 `>>` 버튼을 클릭하면 된다.

<br>

### (4) 데이터 지정

![4](https://user-images.githubusercontent.com/65323733/86904751-1ad40800-c14c-11ea-920c-8288b7f1924b.PNG)

- 어차피 모든 테이블을 복사할 테니 위를 향하는 화살표 버튼를 클릭한다.

<br>

### (5) 완료

- `익스포트`라는 이름의 SQL-Script 파일이 생성된다.
  - Sequence, Table, Data 등 DB 전체 복사를 위한 스크립트이다.

<br>

### 📌 Oracle 버전 확인하기

> 끝날때까지 끝난게아니다! Oracle 버전을 확인해서 메모해두자.
>
> ```sql
> SELECT * FROM PRODUCT_COMPONENT_VERSION;
> ```
>
> 위 명령어 실행을 통해 알 수 있다. 

<br>

<br>

## 2. AWS 프리티어로 RDS Oracle 생성

- https://aws.amazon.com/ko/ 에서 **계정 생성** 

<br>

> ### RDS란?
>
> - RDS는 (Relational Database Service)의 약어로 관계형 데이터베이스 서비스를 의미한다.
> - AWS RDS란 아마존 웹 서비스가 서비스하는 분산 관계형 데이터베이스이다.
> - 애플리케이션 내에서 관계형 데이터베이스의 설정, 운영, 스케일링을 단순케 하도록 설계된 클라우드 내에서 동작하는 웹 서비스이다.
> - DB 백업이나 복구 활성화 등의 관리 프로세스들을 자동으로 관리해준다.
>
> <br>
>
> ### EC2 DB 설치 vs RDS
>
> - EC2는 직접 리눅스에 DB를 설치하고 서비스하는 것이다.
> - RDS는 DB의 설정, 운영, 백업 등의 기능을 편하게 이용할 수 있게 분리된 **DB 전용 서버**이다.
> - 사실 배포까지 생각하면 EC2위에 DB를 설치하는게 좋긴 하다.
> - 하지만 이번 프로젝트는 최대한 많!은!것을 경험하는 것이기 때문에 일단 RDS를 통해 DB 서버를 구축하고 추후 EC2와 연결해 사용해볼 예정이다.

<br>

### (1) 서비스 → 데이터베이스 RDS

### (2) 데이터베이스 생성 클릭

![5](https://user-images.githubusercontent.com/65323733/86904767-1f98bc00-c14c-11ea-940e-c07333dc31dd.PNG)

- **표준 생성** 클릭
- **엔진**은 Oracle 선택

- **에디션**은 Oracle Enterprise Edition
- **버전**은 아까 확인해두었던 버전 선택 (저는 11g였습니다)
  - 사실 11.2.0.2.0 이었나? 이랬는데 그냥 11이면 다 호환되는거 같습니다. 11중에 가장 최신인 버전을 선택
- **✔️ 템플릿**은 무!조!건 **프리 티어** 선택!!!!!!

<br>

![6](https://user-images.githubusercontent.com/65323733/86904815-2fb09b80-c14c-11ea-9986-a038211837d9.PNG)

- DB 인스턴스 식별자 기입
- 마스터 암호 설정

<br>

![7](https://user-images.githubusercontent.com/65323733/86904834-36d7a980-c14c-11ea-9e46-ea29d57c43ec.PNG)

- **인스턴스 크기**는 db.t3.micro로 자동 설정
- **스토리지**는 그대로 두고
- **최대 스토리지 임계값**만 21로 넣어놨다. 
  - 최대 스토리지 임계값은 해당 DB 인스턴스가 자동 확장될 수 있는 제한 크기이다.
  - 나는 쫄보라 최소인 21로 넣어놨다.😎

<br>

![8](https://user-images.githubusercontent.com/65323733/86904853-3ccd8a80-c14c-11ea-854f-650ee856af9d.PNG)

- 연결에서 `추가 연결 구성`을 클릭
- 퍼블릭 액세스 가능을 `예`로 두어야한다!
  - 외부에서 DB 접근을 허용해야 팀원들과 룰루랄라 작업이 가능하기 때문이다.

- **데이터베이스 인증**은 암호 인증은 선택
- **추가 구성**에서 백업은 비활성화했다.
  - 프리티어에서는 백업 데이터가 스토리지를 차지해 과금이 생길수 있기 때문.. ㅜ.ㅜ
- **월별 추정 요금**을 확인한 후 데이터베이스 생성을 클릭하면 끝난다! 쉽즁?😝

<br>

<br>

## 3. SQL Developer와 AWS RDS를 연결

### (1) 내 DB 인스턴스 확인하기

- 아까 들어갔던 서비스 → RDS를 들어가면 리소스를 확인할 수 있다.

![10](https://user-images.githubusercontent.com/65323733/86904907-4ce56a00-c14c-11ea-941d-b40e089dae2d.PNG)

- DB 인스턴스 (1/40) 클릭
- 생성되기까지 약 5~10분정도 소요된다. 잠깐 눈붙이고 누워있ㅈ ㅏ.. 🛌🏻🛌🏻
- 생성되면 DB 식별자 부분을 클릭

<br>

![11](https://user-images.githubusercontent.com/65323733/86904926-52db4b00-c14c-11ea-9ce4-e4ecaa8eecfc.PNG)

- **연결 & 보안**에서 `엔드포인트`와 `포트`를 확인하고 기록해두자
- **구성**에서 `DB 이름`, `마스터 사용자 이름`을 확인하고 기록해두자
  - 특별한 설정이 없었단면 DB 이름은 ORCL로 되어있을거다.

<br>

### (2) SQL Developer에서 접속하기

![9](https://user-images.githubusercontent.com/65323733/86904938-579fff00-c14c-11ea-8bd8-52de1885bde3.PNG)

- SQL Developer에서 `새 접속` 을 클릭
- **접속 이름** : 아무 이름이나 적으면 된다. 저는 `aws_프로젝트이름`으로 했습니다
- **사용자 이름** : 설정했던 마스터 사용자이름 (admin)
- **비밀번호** : 마스터 사용자의 비밀번호
- **호스트 이름** : 아까 연결 & 보안 탭에서 확인했던 엔드포인트
- **포트** : 위와 동일
- **SID** : 위와 동일 (ORCL)
- 테스트를 클릭해보고 성공이 뜨면 완료!

<br>

<br>

## 4. 복사해둔 DB Script 실행

> AWS RDS도 생성하고 SQL Developer로 접속도 완료했다.
>
> 이제 아까 export 해둔 DB Script를 실행하면된다.

<br>

### DB Script 실행

![12](https://user-images.githubusercontent.com/65323733/86904948-5d95e000-c14c-11ea-8bce-ad8497e542ac.PNG)

- 아까 생성한 익스포트 SQL-Script를 전체 복사(ctrl+a)해서 워크시트에 붙여넣기를 한다.
- 하지만 나는....★ 아까 익스포트할 때 스키마 표시를 눌렀기 때문에 값이 제대로 들어가질 않았다.
- 따라서 `Word`에 SQL-Script를 붙여넣기하고 `바꾸기`를 클릭해 스키마 부분을 삭제했다.
  - "SSGSO".
  - SSGSO.
  - `찾을 내용`에 두 개를 차례로 넣고 `바꿀 내용`을 빈칸으로 했다. 다시 복붙하고 전체 실행했더니 정상적으로 DB에 값이 들어갔다!🐥🐥🐥

<br>

<br>

## 5. Spring 프로젝트와 AWS RDS 연결

> 마지막으로 Spring Framework 프로젝트와 AWS RDS를 연결하면 된다!

<br>

### root-context.xml

```xml
<bean id="dataSource" class="org.springframework.jdbc.datasource.DriverManagerDataSource">
    <property name="driverClassName" value="oracle.jdbc.driver.OracleDriver" />
    <property name="url" value="jdbc:oracle:thin:@엔드포인트:1521:DB이름(ORCL)" />
    <property name="username" value="호스트 이름" />
    <property name="password" value="비밀번호" />
</bean>
```

- DB 연결 부분을 root-context.xml에 관리하고 있다.
- `dataSource` 부분에서 세 가지를 위의 예시와 같이  수정해줘야한다.
  1. **url** : 엔드포인트, 포트, DB 이름
  2. **username** : 호스트 이름
  3. **password** : 비밀번호

- 끝!!!