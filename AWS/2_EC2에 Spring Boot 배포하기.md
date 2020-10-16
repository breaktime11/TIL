# EC2에 Spring Boot 배포하기

> - AWS EC2 CentOS7
> - Spring Boot + JAVA 11

# 1. 패키지 설치

애플리케이션 배포에 필요판 패키지들을 설치

### (1) git 설치

```
$ sudo yum install -y git
$ git --version
```

<br>

### (2) Java11 설치

- 설치 가능한 자바 버전 확인

```
yum list java*jdk-devel

Available Packages
java-1.6.0-openjdk-devel.x86_64        1:1.6.0.41-1.13.13.1.el7_3        base
java-1.7.0-openjdk-devel.x86_64        1:1.7.0.261-2.6.22.2.el7_8        updates
java-1.8.0-openjdk-devel.i686          1:1.8.0.262.b10-0.el7_8           updates
java-1.8.0-openjdk-devel.x86_64        1:1.8.0.262.b10-0.el7_8           updates
java-11-openjdk-devel.i686             1:11.0.8.10-0.el7_8               updates
java-11-openjdk-devel.x86_64           1:11.0.8.10-0.el7_8               updates
```

- java-11-openjdk-devel.x86_64  설치

```
sudo yum install java-11-openjdk-devel.x86_64
yes
java -version
```

<br><br>

## 2. 배포하기

### (1) Git Clone

```
$ sudo git clone https://주소
```

<br>

### (2) 권한 변경 (./gradlew)

```
$ ll
total 20
-rw-r--r--. 1 root root 1290 Oct 16 10:57 build.gradle
drwxr-xr-x. 3 root root   21 Oct 16 10:57 gradle
-rw-r--r--. 1 root root 5305 Oct 16 10:57 gradlew
-rw-r--r--. 1 root root 2185 Oct 16 10:57 gradlew.bat
-rw-r--r--. 1 root root   26 Oct 16 10:57 settings.gradle
drwxr-xr-x. 3 root root   18 Oct 16 10:57 src

$ sudo chmod 777 ./gradlew
```

<br>

### (3) 빌드

```
$ sudo ./gradlew build
```

정상적으로 빌드가 완료되면 `build` 폴더가 생성된 것을 확인할 수 있다

<br>

### (4) 실행

```
$ java -jar build/libs/생성된파일.jar
```



<br>

## [ERROR] Gradle Wrapper

```
 Error: Could not find or load main class org.gradle.wrapper.Gradl                         eWrapperMain
```

GradleWrapper가 없어서 생긴 오류가 떴다. gradlew/wrapper/ 디렉토리를 확인해봤더니 파일이 없다..

찾아보니 Gradle로 다시 생성해줘야한다고 나온다

우선 gradle.properties 파일을 통해 버전을 확인하고 해당 버전을 설치해보자

<br>

### (1) Gradle 설치

```
sudo yum install wget
sudo yum install unzip

//gradle 다운
sudo wget https://services.gradle.org/distributions/gradle-4.10.2-bin.zip 

// 설치 디렉토리 생성
sudo mkdir /opt/gradle	

// 압축 해제
sudo unzip -d /opt/gradle gradle-4.10.2-bin.zip

// 환경 변수 설정
export PATH=$PATH:/opt/gradle/gradle-4.10.2/bin
```

<br>

### Gradle Wrap 진행

```
// 아래 두 파일 실행 권한 설정
$ sudo chmod 777  gradle-wrapper.properties
$ sudo chmod 777  gradlew.bat

$ gradle wrap
```

<br>

<br>

## 3. AWS 포트 열어두기

보안그룹으로 이동해 포트를 열어주자

6464포트로 서버가 돌아가기 때문에 6464 포트를 설정해주면 된다

- `인바운드 규칙` - `사용자 지정 TCP` - `6464`  - `위치무관`

<br>

<br>

## 4. 확인해보기

EC2의 IPv4 주소와 포트를 통해 서버를 확인해보자

http://54.180.158.67:6464/swagger-ui.html

잘 나오는 것을 확인할 수 있따 야홍