# :whale2: 01 도커의 기초

## Docker란?

도커(Docker)란 **컨테이너 가상화 기술**을 구현하기 위한 **상주 애플리케이션**(demon 형태)과 애플리케이션 조작하기 위한 **명령행 도구**(CLI)로 구성되는 프로덕트이다.

도커 이전에는 애플리케이션을 호스트/게스트 운영체제에 배포했다. 이런 방식에서는 애플리케이션이 운영체제의 영향을 강하게 받는 의존성 문제가 생긴다. 

반면 도커는 컨테이너에 애플리케이션 실행환경이 함께 배포되는 방식이기에 의존성 문제를 근본적으로 해결할 수 있다.

애플리케이션이 이렇게 환경이 영향을 덜 받고 간단히 배포가 이루어지기에 애플리케이션 배포 환경으로 도커가 널리 쓰인다.

- 애플리케이션 배포에 특화되어 있다.
- 애플리케이션 개발 + 운영을 컨테이너 중심으로 한다.

<br>

### Docker의 장점

- 조작이 간편
- 경량 컨테이너
- 개발 환경 구축 , 운영 환경에 대한 배포, 애플리케이션 플랫폼으로 가능
- 뛰어난 이식성

<br>

### Docker가 적합하지 않은 경우

컨테이너는 운영체제의 동작을 완전히 재현하지 못한다. 따라서 좀더 엄밀한 운영체제를 요구할 때는 VMWare등의 가상 소프트웨어를 사용하는 것이 낫다.

<br>

### Docker의 특징

- 컨테이너 가상화 기술을 사용해 컨테이너를 쉽게 만들고 사용하고 제거 가능하다
- 컨테이너 정보를 Dockerfile 코드로 관리해 재현성이 높다

<br>

### 용어

- 컨테이너 : 도커가 만들어내는 게스트 운영 체제
- 컨테이너 오케스트레이션 도구 : 도커 컨테이너를 각 호스트 서버에 효율적으로 배치하기 위한 기술
- 도커 이미지 빌드 : 도커 컨테이너의 원형이 될 이미지를 만드는 과정
- 멱등성(Idempotency) : 언제든 몇 번을 실행해 같은 결과가 보장됨

<br>

<br>

## 컨테이너 가상화 기술

![호스트 운영체제형 가상화  container에 대한 이미지 검색결과](https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile8.uf.tistory.com%2Fimage%2F992A274E5B13A2B5294584)

컨테이너 가상화 기술은 도커 이전에도 LXC(Linux Containers)라는 시스템 컨테이너가 존재했다.

도커는 컨테이너 가상화 기술을 사용한다. 컨테이너 가상화 기술을 사용하면 가상화 소프트웨어(Vmware)가 없어도 가상 운영체제를 만들 수 있다. 

이 가상 운영체제를 **컨테이너**라고 한다. 컨테이너를 만들면서 발생하는 오버헤드가 다른 가상화 소프트웨어보다 적다.  

- 호스트 운영체제형 가상화 : 운영체제 위에서 가상화 소프트웨어를 사용해 게스트 운영체제를 만드는 방식
  - ex) VmWare
- 컨테이너 가상화 : 게스트 운영체제 없이 호스트 운영체제 위에 격리된 환경에서 가상화를 구현
  - ex) Docker

<br>

<br>

## 도커 이미지와 도커 컨테이너

### 도커 이미지

- 도커 컨테이너를 구성하는 파일 시스템 + 애플리케이션 설정
- 컨테이너를 생성하는 템플릿 역할
- 1) 직접 만들기 2) 기존의 이미지에 +a
  - Docker Hub site

<br>

### 도커 컨테이너

- 도커 이미지를 기반으로 생성됨
- 파일 시스템과 애플리케이션이 구체화돼 실행되는 상태

<br>

### 구현

- 도커 이미지를 만든다

  ```dockerfile
  docker image pull gihyodocker/echo:latest
  ```

- 도커 이미지에서 다시 도커 컨테이너를 만들고 실행한다

  ```dockerfile
  docker container run -t -p 9000:8000 gihyodocker/echo:latest
  ```

  - `-p` : 포트 포워딩
  - `-t` : 태깅 (이름설정)

- 포트포워딩을 통해 사용자가 컨테이너 내의 애플리케이션을 사용한다

- `curl` 명령을 통해 HTTP 요청을 보내본다

  ```
  curl http://localhost:9000/
  ```

<br>

<br>

## Docker 사용하기

### Dockerfile

```
FROM ubuntu:16.04

COPY helloworld /usr/loca/bin
RUN chmod +x /usr/local/bin/helloworld

CMD["helloworld"]
```

Dockerfile이란 **나만의 이미지를 빌드**할수 있게 해주는 Docker Image File이다. Docker Hub에 없는 이미지라도 직접 작성 가능하다.

FROM 등의 **인스트럭션(명령) 키워드**를 사용하고 전용 도메인 언어로 이미지의 구성을 정의한다. 

- **인스트럭션**
- `FROM` : 도커 이미지의 바탕이 될 베이스 이미지 지정
  - `COPY` : 도커가 동작중인 호스트 머신의 파일(출발지) 등을 컨테이너 안으로 복사 (목적지) 
  - `RUN`  : 컨테이너 안에서 실행할 명령 정의
  - `CMD` : 도커 컨테이너 안에서 실행할 프로세스를 지정 / 하나만와야함 / 제일 마지막에 오는게 일반적
    - CMD ["go", "run", "/echo/main.go"] : 명령을 공백으로 나눈 배열로 나타냄

<br>


### Docker image Build

```
$ docker image build -t helloworld:latest .
```

- `.` → 현재 디렉토리에 있는 Dockerfile
- `-t` : 이미지명 지정

<br>


### Docker image Run

```
$ docker container run helloworld:latest
  docker run helloworld:latest
```

- `run` = **create + start**
  - create : OS 실체화
  - start : container 가동
- `docker run` 
-  `docker create`

- `docker start`
- `docker stop`

<br>

<br>

## Docker를 사용하는 의의

- 변하지 않는 샐행환경으로 멱등성(Idempotency)확보
- 코드를 통한 실행환경 구출, 애플리케이션 구성 : IAC (Infrastructure as Code)
- 실행환경, 애플리케이션 일체화 → 이식성 향상
- 시스템 구성 애플리케이션, 미들웨어 관리 용이

<br>

### IAC (Infrastructure as Code), 불변 인프라

- 코드 기반으로 인프라 정의

<br>

# :whale2:02 도커 컨테이너 배포

>1. 도커 이미지 다운
>2. 다운받은 도커 이미지로 컨테이너 만들기

<br>

## Docker Download

- https://hub.docker.com/에서 로그인 후 다운로드

```powershell
> docker login
> docker version
```

<br>

<br>

## Container 배포

### Docker Image Download

```powershell
> docker image --help

> docker image ls	//로컬에 존재하는 이미지 목록
> docker image pull gihyodocker/echo:latest	//이미지 다운 from hub
```

<br>

### Docker Run (도커 이미지로 컨테이너 실행)

```powershell
> docker run gihyodocker/echo:latest
> docker container ls	//실체화된 컨테이너 목록 보기
> docker stop [Container ID] or [Container Name]
> docker run -p 8080 gihyodocker/echo:latest
CONTAINER ID        IMAGE                     COMMAND                  CREATED             STATUS              PORTS                     NAMES
d612095b486b        gihyodocker/echo:latest   "go run /echo/main.go"   20 seconds ago      Up 18 seconds       0.0.0.0:32768->8080/tcp   great_feynma

> curl http://localhost:32768

> docker run -p 9000:8080 gihyodocker/echo:latest

> docker run -d -p 8080 gihyodocker/echo:latest

> docker run --name myweb1 -d -p 8080 gihyodocker/echo:latest
```

- `curl` : HTTP 요청 보내기 / 파워셸에서 웹브라우저 접근시 사용
- `-p`: 포트번호 부여
  - -p 9000:8080 (호스트가 사용할 포트 : 9000 / 도커에 8080)
- 30000~32768 중에 랜덤 숫자 할당됨
- docker container ls = docker ps : 현재 실행중인 컨테이너
- docker ps `-a `: 중지된 컨테이너까지
- `-d` option : 데몬으로 백그라운드 실행
- `--name` : 컨테이너 이름 설정

<br>

### Container 삭제

```powershell
docker ps -a
docker container rm 63cb5efeee62
docker container prune	//stop된 컨테이너 삭제

docker stop $(docker ps-q)
```

- stop이나 rm시 한꺼번에 하기
  - docker stop 31 68 앞 두글자 가능
  - docker stop $(docker ps-q)
  - docker rm $(docker ps -qa)

<br>

### 이름 중복 오류

```
The container name "/myweb1" is already in use by container "6986d13a02c488cf063ae5ae6c242eb35567b755f34c0cca2e74935cee32b3da".
```

- 이름 중복시 오류 발생
- 해결
  - docker stop myweb1
  - docker rm myweb1
  - docker stop myweb1 & docker rm myweb1







