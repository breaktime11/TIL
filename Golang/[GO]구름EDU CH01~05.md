## 01 변수와 상수

### 변수

- 변수 선언 방식
  - `var 변수이름 변수형`
  - `:=`
    - 함수 내에서만 사용 가능
- 변수 선언 후 초기값을 설정하지 않으면 **Zero value** (0 / false / "")로 설정됨
- 선언만하고 변수를 사용하지 않았다면 에러를 발생해 컴파일에 실패함

<br>

### 상수

- 한번 선언 및 초기화 후 수정 불가하기 때문에 꼭 선언과 동시에 초기화해야함
- `const` 키워드를 사용해야하기 때문에 `:=`는 사용 불가능

<br>

<br>

### 실습

출력

```
3과 7의 합은 10입니다.
```

<br>

```go
package main

import "fmt"

func main() {
	var num1 int = 3
	num2 := 7
	result := num1 + num2
	
	fmt.Printf("%d과 %d의 합은 %d입니다.", num1, num2, result)
}
```

<br>

<br>

출력

```
kim 800101-1000000 800101-1000000xxxxxxxxxx kim 800101-1000000 800101-10000003과 7의 합은 10입니다.
```

<br>

```go
package main

import "fmt"

const (
	name string = "kim"
	RRN = "800101-1000000"
	job
)

func main() {
	fmt.Println(name, RRN, job)	// kim 800101-1000000 800101-1000000
}
```

<br>

<br>

## 02 연산자

### 채널 연산자

- 채널 : 고루틴 끼리 데이터를 주고 받고 실행 흐름을 제어하는 기능
- 채널 연산자 : 채널에서 사용하는 연산자
  - `<-` : 채널의 수신을 연산해 채널에 값을 보내거나 가져옴

<br>

### 포인터 연산자

- C언어같이 `&`와 `*` 연산자를 이용해 메모리에 접근할 수 있다
- 다만 포인터 산술, 포인터에 더하고 빼는 기능은 제공되지 않는다
- `&` : 변수의 메모리 주소 참조
- `*` : 포인터 변수에 저장된 메모리에 접근해 값을 참조

<br>

<br>

### 실습

입력

```
7 2 10
```

출력

```
7 x 2 + 10 = 24
```

<br>

```go
package main

import "fmt"

func main() {
	var num1, num2, num3, result int
	fmt.Scanln(&num1, &num2, &num3)
	result = num1 * num2 + num3
	
	fmt.Printf("%d x %d + %d = %d\n", num1, num2, num3, result)
}
```

<br>

<br>

입력

```
7 2
```

출력

```
몫 : 3, 나머지 : 1
```

<br>

```go
package main

import "fmt"

func add(x, y int) (q, d int){
	q = x / y
	d = x % y
	return
}

func main() {
	var num1, num2 int
	fmt.Scanln(&num1, &num2)
	q, d := (add(num1, num2))
					 
	fmt.Printf("몫 : %d, 나머지 : %d", q, d) 
}
```



<br>

<br>

## 04 자료형

- `unsafe.sizeOf(변수)` : 자료형의 size 확인

| 자료형           | 선언       | 크기(byte)             |
| ---------------- | ---------- | ---------------------- |
| 부울린           | bool       | 1                      |
| 정수형(음수포함) | int        | n비트 시스템에서 n비트 |
|                  | int8       | 1                      |
|                  | int16      | 2                      |
|                  | int32      | 4                      |
|                  | int64      | 8                      |
| 정수형(0, 양수)  | uint       | n비트 시스템에서 n비트 |
|                  | uint8      | 1                      |
|                  | uint16     | 2                      |
|                  | uint32     | 4                      |
|                  | uint64     | 8                      |
|                  | uintptr    | 8                      |
| 실수             | float32    | 4                      |
|                  | float64    | 8                      |
| 복소수           | complex64  | 8                      |
|                  | complex128 | 16                     |
| 문자열           | string     | 16                     |
| 정수(0, 양수)    | byte       | 1                      |
| 정수             | rune       | 4                      |

- n비트 시스템에서 n비트
  - 32비트 시스템 = 4바이트(32비트)
  - 64비트 시스템 = 8바이트(64비트)
- **string**으로 선언된 문자열 타입은 **immutable** 타입이기에 값 변경 불가능
- byte는 unint8과 똑같은 자료형
  - 바이트 값을 8비트 부호없는 정수 값과 구별하는 데 사용
- rune은 int32와 똑같은 자료형
  - 관례상 문자 값을 정수 값과 구별하기 위해 사용
- **자료형의 변환**
  - 변환을 명시적으로 지정
    - uint(변수)

<br>

### 실습

입력

```
3-105
```

출력

```
float32, 3.000000
uint, 18446744073709551606
int64, 5
```

<br>

```go
package main

import "fmt"

func main() {
	var num1, num2, num3 int
	fmt.Scanln(&num1, &num2, &num3)
	
	new1 := float32(num1)
	new2 := uint(num2)
	new3 := int64(num3)
	
	fmt.Printf("%T, %f\n", new1, new1)
	fmt.Printf("%T, %d\n", new2, new2)
	fmt.Printf("%T, %d\n", new3, new3)
}
```

