# [Spring] properties 파일 관리, STS .gitIgnore

>  Spring 프로젝트에서는 DB 연결을 위한 민감한 정보들이  root-context.xml에 들어있다. 
>
> 이 중요한 파일을 Github에 그대로 올리면 절대 안되기 때문에 properties 파일을 이용해 민감한 정보를 숨겨보자.
>
> https://insight-bgh.tistory.com/180

<br>

## 1. properties 파일 생성 후 관리

![spring_img](../image/spring/15.png)

### (1) 폴더 & 파일 생성

- src - main - webapp 밑에 `config` 폴더를 생성한 후 `config.properties` 설정 파일을 생성해준다.

<br>

### (2) config.properties

```properties
spring.datasource.driverClassName=드라이버이름
spring.datasource.url=유알엘
spring.datasource.username=유저네임
spring.datasource.password=비밀번호
```

- root-context.xml `dataSource` bean의 `value`를 config.properties 파일 안에 넣어준다.

<br>

### (3) root-context.xml

```xml
<bean id="dataSource" class="org.springframework.jdbc.datasource.DriverManagerDataSource">
    <property name="driverClassName" value="${spring.datasource.driverClassName}" />
    <property name="url" value="${spring.datasource.url}" />
    <property name="username" value="${spring.datasource.username}" />
    <property name="password" value="${spring.datasource.password}" />
</bean>
```

- 기존의 datasource 변경

<br>

### (4) root-context.xml에 config 파일 자동로드하는 부분 추가

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:context="http://www.springframework.org/schema/context"	
       xsi:schemaLocation="http://www.springframework.org/schema/beans https://www.springframework.org/schema/beans/spring-beans.xsd
                           http://www.springframework.org/schema/context http://www.springframework.org/schema/context/spring-context-4.3.xsd">

    <!-- config파일 자동 로드 location="classpath:database.properties"  /!-->
    <context:property-placeholder location="/config/*.properties" /> 
```

- beans 설정에 아래와 같이 context 부분을 추가해줘야한다.

  ```xml
  xmlns:context="http://www.springframework.org/schema/context"
  
  xsi:schemaLocation="http://www.springframework.org/schema/context http://www.springframework.org/schema/context/spring-context-4.3.xsd"
  ```

- 서버 실행해보면 정상적으로 작동하는 것을 볼 수 있다.

<br>

<br>

## 2. STS Spring Framework .gitignore 파일

![spring_img](../image/spring/16.png)

- .gitignore 파일은 항상 프로젝트 최상단에 위치해야한다.

- 올리고 싶지 않은 파일 이름을 적으면 된다.

  ```
  # ignore properties file
  config.properties
  ```

<br>

### .gitignore

```
# Created by https://www.gitignore.io/api/git,java,maven,windows,eclipse
# Edit at https://www.gitignore.io/?templates=git,java,maven,windows,eclipse

### Eclipse ###
.metadata
bin/
tmp/
*.tmp
*.bak
*.swp
*~.nib
local.properties
.settings/
.loadpath
.recommenders
.target/

# ignore properties file
config.properties

# External tool builders
.externalToolBuilders/

# Locally stored "Eclipse launch configurations"
*.launch

# PyDev specific (Python IDE for Eclipse)
*.pydevproject

# CDT-specific (C/C++ Development Tooling)
.cproject

# CDT- autotools
.autotools

# Java annotation processor (APT)
.factorypath

# PDT-specific (PHP Development Tools)
.buildpath

# sbteclipse plugin
.target

# Tern plugin
.tern-project

# TeXlipse plugin
.texlipse

# STS (Spring Tool Suite)
.springBeans

# Code Recommenders
.recommenders/

# Annotation Processing
.apt_generated/

# Scala IDE specific (Scala & Java development for Eclipse)
.cache-main
.scala_dependencies
.worksheet

### Eclipse Patch ###
# Eclipse Core
.project

# JDT-specific (Eclipse Java Development Tools)
.classpath

# Annotation Processing
.apt_generated

.sts4-cache/

### Git ###
# Created by git for backups. To disable backups in Git:
# $ git config --global mergetool.keepBackup false
*.orig

# Created by git when using merge tools for conflicts
*.BACKUP.*
*.BASE.*
*.LOCAL.*
*.REMOTE.*
*_BACKUP_*.txt
*_BASE_*.txt
*_LOCAL_*.txt
*_REMOTE_*.txt

### Java ###
# Compiled class file
*.class

# Log file
*.log

# BlueJ files
*.ctxt

# Mobile Tools for Java (J2ME)
.mtj.tmp/

# Package Files #
*.jar
*.war
*.nar
*.ear
*.zip
*.tar.gz
*.rar

# virtual machine crash logs, see http://www.java.com/en/download/help/error_hotspot.xml
hs_err_pid*

### Maven ###
target/
release.properties
dependency-reduced-pom.xml
buildNumber.properties
.mvn/timing.properties
.mvn/wrapper/maven-wrapper.jar

### Windows ###
# Windows thumbnail cache files
Thumbs.db
Thumbs.db:encryptable
ehthumbs.db
ehthumbs_vista.db

# Dump file
*.stackdump

# Folder config file
[Dd]esktop.ini

# Recycle Bin used on file shares
$RECYCLE.BIN/

# Windows Installer files
*.cab
*.msi
*.msix
*.msm
*.msp

# Windows shortcuts
*.lnk

# End of https://www.gitignore.io/api/git,java,maven,windows,eclipse
```

