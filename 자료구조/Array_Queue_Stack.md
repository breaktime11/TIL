# 자료구조

- 자료구조란?
  - 자료구조란 **데이터**를 **효율적**으로 **관리**할 수 있는 데이터 **구조**를 의미한다.
  - 대표적인 자료구조
    - 배열, 스택, 큐, 링크드 리스트, 해쉬 테이블, 힙 등
- 알고리즘이란?
  - 알고리즘이란 어떤 문제에 대해, 특정한 **입력**을 넣으면 기대하는 **출력**을 얻을 수 있도록 만드는 프로그래밍

어떤 자료구조와 알고리즘을 쓰느냐에 따라, 성능이 천지차이기 때문에 자료구조와 알고리즘은 매우 중요하다.

<br>



# Array (배열)

- 데이터를 나열하고 각 데이터를 **인덱스**에 대응하도록 구성한 데이터 구조
- 파이썬에서는 리스트 타입이 배열 기능을 제공하고 있음

<br>

### 배열이 왜 필요할까?

**같은 종류**의 데이터를 **순차적**으로 정리해 효율적으로 관리하기 위해 사용

파이썬의 배열은 예외적으로 다양한 종류의 데이터 저장 가능

<br>

### 배열의 장단점

- 배열의 장점
  - **빠른 접근**이 가능
    - 인덱스 번호를 통해서 바로 데이터에 접근할 수 있기 때문에 접근이 굉장히 빠르다.
- 배열의 단점
  - **미리** 데이터의 **최대 길이를 지정**해놔야하기 때문에 
  - 가변적인 데이터를 다룰 때 데이터 **추가** 또는 **수정**이 쉽지 않다. 
    - 만약 배열의 길이를 추가하고 싶을 때, 배열을 하나 더 생성해 이어붙여야하는 상황이 발생할 수 있다.
    - 수정시 뒤의 데이터를 앞으로 당겨줘야한다.

<br>

### Python vs C언어의 배열

```c
#include <stdio.h>

int main(int argc, char *argv[])
{
    char country[3] = "US";
    printf("%c %c \n", country[0], country[1]);
    printf("%s\n", country[2]);
    
    return 0;
}
```

<br>

```python
country='US'
print(country)
```

- Python의 배열은 원래 배열보다 추가적인 기능을 갖고 있다.
- 미리 배열의 길이를 지정해주지 않아도 된다.

<br>

<br>

## 파이썬의 배열

```python
# 1차원 배열
data=[1,2,3,4,5]
print(data)

# 2차원 배열
data=[[1,2,3], [4,5,6], [7,8,9]]
print(data[0][0]) #1
print(data[0][1]) #2
print(data[2][0]) #7
```

<br>

<br>

# 큐 (Queue)

## 큐의 구조

![큐 자료구조 이미지 검색결과](https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F9929C0495C932BB115)

큐란 가장 **먼저** 넣은 데이터를 가장 **먼저** 꺼낼 수 있는 자료구조이다.

- 음식점에서 줄을 서는 것과 동일
- **FIFO(First-In, First-Out)** 또는 LILO(Last-In, Last-Out) 방식으로 스택과는 순서가 반대

<br>

### 큐의 활용

- 큐는 운영체제에서 멀티 태스킹을 위한 **프로세스 스케줄링 방식**을 구현하기 위해 많이 사용됨

<br>

### 큐의 용어

- **Enque**
  - 큐에 데이터를 넣는 기능
- **Deque**
  - 큐에 데이터를 꺼내는 기능

<br>

## 파이썬 Queue 라이브러리

### Queue()

```python
import queue

# 일반적인 FIFO 정책
data_queue = queue.Queue()
data_queue.put("hi")
data_queue.put(3)
print(data_queue.qsize()) #2
print(data_queue.get())
print(data_queue.qsize()) #1
```

- 가장 일반적인 큐, FIFO
- `put` : enque
- `qsize` : 큐 사이즈
- `get` : deque

<br>

### LifoQueue()

```python
import queue

data_queue = queue.LifoQueue()
data_queue.put("hi")
print(data_queue.qsize())
data_queue.put("second")
print(data_queue.qsize())
print(data_queue.get()) #second
```

- LIFO (Last-In, First-Out)
  - 마지막으로 저장된 값이 가장 먼저 추출됨

<br>

### PriorityQueue()

```python
import queue

data_queue = queue.PriorityQueue()
data_queue.put((10, "ten"))
data_queue.put((3, 777))
data_queue.put((5, "five"))
print(data_queue.qsize())
print(data_queue.get()) #(3,777)
```

- 각 데이터마다 우선순위 번호가 부여되며, 그 번호의 순서에 따라 데이터가 추출됨
  - `put(우선순위, 값)`
- 우선순위가 가장 높은 값이 먼저 추출됨

<br>

## Queue 구현

```python
queue_list = list()
def enqueue(data):
    queue_list.append(data)

def dequeue():
    data = queue_list[0]
    del queue_list[0]
    return data

for i in range(10):
    enqueue(i)

print(len(queue_list))
print(dequeue()) #0
print(dequeue()) #1
```

<br>

<br>

# 스택 (Stack)

![스택 이미지 검색결과](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAADSCAMAAABD772dAAAA1VBMVEX///+5ubkAAAC1tbXAwMDg4OAfHx+np6e3t7f7+/v09PRpaWmysrLo6Ojr6+vJycn9AACOjo6Ghob///z6//+enp40NDT//f//sa9TU1NJSUmZmZmTk5NOTk7Dw8NfX1/+kJD/397U1NR3d3cQEBD/p6g7OzsnJydxcXEwMDAcHBxjY2OAgID2AABDQ0MMDAz/h3//3NX+FBX+np78zcH/bmn1Lib67+T6MTP8Wln7Tk37wMD87+7+KyX95eL5urP9eXn8Pj/9aWv/59/7j4f6s7P/Q0QjuPF9AAAK/ElEQVR4nO2di3+aOhTHQ4QiiIg8dKDFTV192627j+1uvbvbvdv//yfdcwJadVpD2ygRfp9utRBDvjnJyRMgZFO+53kG/LR98rh8CIPBvGMBcy7P8Ntem7Q972hIzzcgpOS8BHA9MB7oQIDVcUBt+/BzKJw0Aqv5HoeBSZuFM8jxkDmX/27hvCd76nAb/3OXS5P95UHGvHUWb4WbOMlQn6/uQOkkvu+jiwFzcMb/2nHesMvsQ6lRaiZnIL63jvNqfUYQuO+9d+4WC8f5QGaUGpsXMpLP1dlMWyUerPDb747zx7s/gSCplwYGsse17oELPABDyLqm1Vm0tqZpAGrWe5T2NWbjFbCpabapJccEyPPfOM7HT5/+ekV6CfBW3sLHDiTpIfRnx7n/5Cw+fkFjr6VNaXjoAitgg5iQpZSOASWYwIeoTyzKFON1VsBVSq9v4J8tAjcF/oCllHTHMyA0wRDMcvgJiRF45WN9cre4/9v/6jj/+BAUw5pwztBGNDzghzeKNORo16U0IArw6JROiWZFlOp6nQVMgVXIgfkcgooBJgj8GlpAj7hhZNhDutRbt4RYI7juwCT9xAZBGvrrwnkF9ReK9RcyoLSONgrIhIW53WuTDeA47mtNSl3SRaNazSZUlfGqWK2BITcGeNmBGF6PoIUJmhgMQOwWvaV0SCD/QwAKSd0N4dpuI80d8LhvwM4fFs4PMkdgSJ5OgsGQTpqdvdVuA5jo0ZAicEzpaJzU0sRp7QB3BAITBL7/9u2Pvxmw2QJL6SY6sD5pznpwPqB05bSI/925ewPFHFL2dgOY1Ee0dyD6jToMMdEJApPOFD62lHMAMwvff/x4/2UNDABYcSM9SUnitJJy1/6+uHsDheHVDjDW4aPABuD2gaQJR80GfJvaDNjeBlZPYOEP6I5WwEPkNGtYK8M62fbS/jtIPPT/gOHzDnDvQLvpk/8c51/8ZFIoBlDnQxNMbZGQxQuR3PbwMuj1AfgHxhiIBGZOC/rt7VUdjhLD2nqEldnYBn6FlbdNvi+cPzGtNgIkwMsD8Rv4nfv7+7vffagnV5iPigHlCJxiDS9zzZolNLDnbxXpsSBgD4HBDt4WsDsd9QmkBT6C/5oM0lpseHcO1Pav6NgRuG9eMw9uQsMZBnttDD2y//4C/fyHmPMoampNt0/s7nXU01l4Q0s7GeD8f/z89pk0lkudaBBSEC8r0lCctoEhh1thkstYrVfNkg9N8OLjJ8f5Cb188LU3AMrqfADud7qvWQLDsSYAf9a9119zBscM0I2DHi5fh/Xp8sl7NJeX1GFjXaT7UIlHic2MRqymFm4bSdfy9RdoudH2vWYCTDQ1jvdZ2GtjDxRGxQYUoiS6FaKx1YuF/PAMnAQQ1otepQhHA5AerquwdKMdgNeXfhxXqlSpUky2KkTPHCALTJVtKQJkPRe4UhWQqgoDrgiIOYn6WcDCUsUZdVomMkX9HGA+Az8lVXzA6s1wOhwOaTdL1MIt/KRUcUbdwr74TauTJWrxwJCqJaaK08YZgeNTFmnuVDUylOnswIrC6TxPB5zZDPxRN0GZ8vIkwJlTxR81m4XPEvVJgDOnij/qDih/Fg66HV5PmhW4oXBXlhMC89fgzMAs5tw5rQy83MDVPDdLsaBmaUlpFEVLN0sTLx4YUnWdNVWcfelgxPzhIFfA61TxJSrjaClL2TnZaEmNY/zJkipu4EwDVPmHh0+JOqM2555FAltKpfriyjzjsTPTblsvn6ZKkipTE6LM21zqW3+JSlWOdtLFgtbj8qvpPEfZL14GGdOeqO1e+VSMmyxEr0bmSXXsNblF4TXqWj/CXuJEOXdSBCqxpllX5r1odEtT9Rpbm0gvTX33hu4q1M+dKlEy9NEvtKmZg/7xr0unxiFcAO5ox7+fVx3akaIfor3WBe1GFi/DVN1BL6zNG79CVw7gRns3GEkhwwrXGK3dOmlfbVu1W1ni76G8zZLtbltuh6SzcWqOG55Zx4ONIAwZGyWzM9wtq9sDwGh9fJkYH7uWDRkbYJbi/vLXyjnfCtZa86YZMaahpL4KiLt73dHWYGgNnO7fJ7cD+Yy70ixBmYThVku75bd66cEwxVRF3SciXib45mFNt7H9NUzrobIGm6GsnYJel9a+xoxG1Q0HZdRWwO5mMO1qz0EZtHMrqkHGI3UnxHLHmInmycEazzXII3e8nlrbRdUglZ3bHyCdjb3AdnJw7071fVfJS4/kim06X2W/QfrJr832tJ6W3p15SSU5Gh+9hMGA1aPhTqOrdJf9I8J7LVAP4ZLcGLCjh+6h2pJMwFABw+0Wd30m4jSxVMDGg4Xt3TMmm+1ocbgjaYADHMfbSffjds/9MT1ORy0NcGMK6dQSA89+OQulnQ2prKNXkQYY2mAd76pGdfaGqEx5qrE0wDiMaB7wWSgo5RoU69vGkWGhPMDaw9hh73nkbEyONm3yAJvraecDN6Ayyyo9On60xyUPcNq7wHFgoPQPLpQb9cB9bCZaIuDNuSvw1PXHwh6WRMDxBu7gybPrEgHba9zeMxYTJAImKe4V6108dVArE3CyDho+b61IJmDWkX7ujKRMwK10JPwsZJmARzyDg2OSCXj4ArxSAb/IRKxEwOahh6RkkkTAdRwUPHtOWSLgl1EJfD6VwEJUAp9PJbAQ5RJY5AJuLoFFKofAhilGScHJITBRLatyRNbO7+Oy0uWKXAKLuHlOKYHProzAVoDSuXNHeuBmMmdbKwqwCsA9fEbyrEDArhrP4EsFAlaUgNIxXxW4CGBVwccaFwhYQeDrogEXycIq1uFagYAVtUZpwMUrPbDCgOdDes3HKz9wuuVjwvucDumBlW6tVht3i9OXVjI9eVN64OqeTxcNnJk3z8DK8Sme7MrvFE9yp40AJVfJH7BglcDnU3GB60KU7qLOI7BSfXknnWMvTQjvE3EzqZpjYJWvM4GhitO1RKm667q8T3WXHRjNO2aPfxgFxZjxUJQepbNgDMR8L9SQHrhDaRiram15wzcTLzdwVVFDSvEx5NxjYrmBAXRCbzO9HEZ24HhEh5keOys3cJU985t/cVh6YCjSM8rerKJ3uwFXT0V2YPTSN7ES1yidc4WXHliZ4RP+BoVph6EUj9mdWy09/fPCgZVVX5o3dJ6BuadeM8zE53p4yAuRRUUDrua6SAt4tn61kmNgoSqBz6cSWIhK4PMpi5eupP+q3A49z16arx3O+NLZonU88t2X5iPI9j5Z+YGTHfHcr1eVHhi3Ht70rrh3Hl4EsNtocu8tvQjgeYybafl4LwI4nI+KVaTZs3l4l88vAXhgzfnfzXgJwK6KS2qcK0yXADxXcf2hSDviG8FVYSysdCmdjobFqcOKUhtNRqPrJifvBQDj0CHmHz3IDwzI1QyD4ksAzqJcTwAI2GpZqaRPns4jsF203bRClUvg8tE0L6gS+HwqLrBivbwqVo6bpWwdj6Lde8itEvjsyg4ch3RSqNESvg+vw1uJLwBYxVdd9IqytoSa4MR0gbx0h9LxLZ0XZG1Jwds8hlbE/VwL+YF1SmsNl9ttSQ+sjim9CSNKQ778kRxYVSqTZDWN3hbhRi2likst09akdcW7JC45sKLesLtaqhbvTQ+yAwetVqTi/Uu9VqtTAODqavt/lXfxQXrgh//5JDlwduUYWKkIeMxDnp/yYItRcpU8AgtVCXw+Xb3EC7OOKl/Ay5pojfMFfBqVwGfSqXhzA6ydSgde5FuqVKlSpS5I/wPgaRK7X9OhcQAAAABJRU5ErkJggg==)

- 스택은 한쪽 끝에서만 데이터를 넣거나 뺄 수 있는 구조이다
  - 데이터에 **제한적**으로 접근
- 가장 **나중에** 넣은 데이터를 가장 **먼저** 추출할 수 있는 데이터 구조
- 스택은 LIFO(Last-In, First-Out) 정책 또는 FILO 데이터 관리 방식을 따름
  - 큐 : FIFO

<br>

### 스택의 활용

- 스택은 컴퓨터 내부의 **프로세스** 구조의 **함수 동작 방식**에 활용된다

<br>

### 스택의 용어

- **push()**
  - 스택에서 데이터를 넣는 기능
- **pop()**
  - 스택에서 데이터를 꺼내는 기능

<br>

### 스택의 장점과 단점

- 장점
  - 단순한 구조 -> 구현이 쉬움
  - 데이터의 저장과 읽기 속도가 빠르다
    - 빠른 프로세스 실행이 가능
- 단점 (일반적인 스택)
  - 데이터의 최대 갯수를 **미리** 정해야함
  - 따라서 데이터 **저장 공간의 낭비**가 발생할 수 있다
    - 미리 최대 갯수만큼 저장 공간을 확보해야함 (1000)

<br>

## 프로세스 스택 구현

```python
def recursive(data):
    if data < 0:
        print("ended")
    else:
        print(data)
        recursive(data-1)
        print(data, "returned")

recursive(4)
```

```
4
3
2
1
0
ended
0 returned
1 returned
2 returned
3 returned
4 returned
```

<br>

## python 리스트 기능을 사용한 스택 구현

```python
data_stack = list()
data_stack.append(1)
data_stack.append(2) 
print(data_stack) # [1, 2]
print(data_stack.pop()) #2
print(data_stack.pop()) #1
```

- append(push), pop 메서드 이용

<br>

```python
stack_list = list()
def push(data):
    stack_list.append(data)

def pop():
    data = stack_list[-1] # -1 : 맨끝 index
    print(data)
    del stack_list[-1]
    return data

for i in range(10):
    push(i)
    
pop() #9
pop() #8
```

