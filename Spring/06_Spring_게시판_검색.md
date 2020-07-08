# [Spring] 게시판 검색



> Spring으로 게시판 형식의 검색을 구현하고자 한다.
>
> 동일한 페이지에서 검색 버튼만 클릭시 테이블의 데이터만 변경해보자.
>
> 다음과 같이 유형, 분류 등을 선택하고 조회버튼을 클릭하면 원하는 데이터를 가져온다.

![spring_img](../image/spring/17.png)

![spring_img](../image/spring/18.png)



<br>

<br>

## 1. list.jsp 수정

```jsp
<div class="input-group" >
    <span class="input-group-addon" id="basic-addon1">CDA 유형</span>
    <div class="btn-group">         
        <select id="cda_type" name="cda_mapping" style="height:30px;">
            <option>PC/Server</option>
            <option>A.1</option>
            <option>A.2</option>
        </select>
    </div>
    <span class="input-group-addon" id="basic-addon1">점검 분류</span>
    <div class="btn-group">
        <select id="groupList" name="inspect_group"  style="height:30px;" onchange="categoryChange(this)">
            <option value="" selected>점검 분류 선택</option>
            <c:forEach var="group" items="${groupList}">
                <option value="${group.code_type_no}">${group.code_type_name}</option>
            </c:forEach>
        </select>

    </div>
    <span class="input-group-addon" id="basic-addon1">점검 항목</span>
    <div class="btn-group">
        <select id="insSelectList" name="inspect_group_list" style="width:440px; height:30px;">
            <option value="" >점검 항목명</option>
        </select>
    </div>
</div>

<div align="right">
    <button class="btn btn-primary" name="btnSearch" id="btnSearch">조회</button>
</div>  



<script>
    $(document).on('click', '#btnSearch', function(e) {
        e.preventDefault();
        var url = "${pageContext.request.contextPath}/inspection/list";
        url = url + "?cda_mapping=" + $('#cda_type').val();
        url = url + "&inspect_group=" + $('#groupList').val();
        url = url + "&inspect_group_list=" + $('#insSelectList').val();

        location.href = url;
        console.log(url);
    });
</script>
```

- javascript에서 버튼 클릭 이벤트를 추가하고 url을 보낸다.

- `var url = "${pageContext.request.contextPath}/inspection/list";`

<br>

<br>

# 2. 동적 SQL

### trim

- `prefix` : trim문 가장 앞에 붙여준다.
- `prefixOverrides` : trim문 안에 쿼리 가장 앞에 해당하는 문자들이 있으면 자동으로 지워준다

<br>

```sql
<trim prefix="WHERE" prefixOverrides="AND|OR">
	<if test="cda_mapping != null and cda_mapping != ''">
		Cda_mapping = #{cda_mapping} 
		<if test="inspect_group != ''">
			AND i.Inspect_group = #{inspect_group} 
			AND i.Inspect_group_list = #{inspect_group_list}
		</if>
	</if>
</trim>
```

- `trim`을 통해 WHERE절을 동적으로 추가할 수 있다.
- 또한 파라미터로 넘어오는 값이 존재한다면 / 존재하지 않는다면 등 `if`절도 사용 가능하다

<br>

<br>

## 3. Search 객체 생성

### Search.java

```java
public class Search {
    private String cda_mapping;
    private String inspect_group;
    private String inspect_group_list;

    public Search() {}

    public String getCda_mapping() {
        return cda_mapping;
    }
    public void setCda_mapping(String cda_mapping) {
        this.cda_mapping = cda_mapping;
    }
    public String getInspect_group() {
        return inspect_group;
    }
    public void setInspect_group(String inspect_group) {
        this.inspect_group = inspect_group;
    }
    public String getInspect_group_list() {
        return inspect_group_list;
    }
    public void setInspect_group_list(String inspect_group_list) {
        this.inspect_group_list = inspect_group_list;
    }
}
```

- Mapper로 값을 전달하기 위해 Search 객체를 생성한다.

<br><br>

## 4. Controller, Service, DAO 수정

### listController

```java
public String getInspectionList(Model model
			, @RequestParam(required=false) String cda_mapping
			, @RequestParam(required=false) String inspect_group
			, @RequestParam(required=false) String inspect_group_list) throws Exception{
		logger.info("getInspectionList::::");
		logger.info("cda_mapping = " + cda_mapping + " inspect_group = " + inspect_group
					+ " inspect_group_list = " + inspect_group_list);
		
		// 검색 객체 생성
		Search search = new Search();
		search.setCda_mapping(cda_mapping);
		search.setInspect_group(inspect_group);
		search.setInspect_group_list(inspect_group_list);
		
		// 기술적 보안조치항목 리스트
		List<InspectionResultVO> iresultvoList = new ArrayList<InspectionResultVO>();
		iresultvoList = inspectService.getInspectionResultList(search);
		model.addAttribute("list", iresultvoList);	
    
    	...
        ...
}
```

- 검색 객체를 생성하고 `RequestParam`을 넣어준다.

- `iresultvoList = inspectService.getInspectionResultList(search);`
  - search객체를 파라미터로 넘겨준다.
  - 이후 Service, DAO 등 다 수정해준다.

<br>

### RequestParam

- RequestParam은 Spring MVC에서 쿼리 스트링 정보를 쉽게 가져오기 위해 사용한다.
- 만약 요청 쿼리 스트링에 RequestParam이 존재하지 않으면 Bad Request 에러가 나타난다.
- 따라서 `@RequestParam(required = false)` 를 추가해 파라미터로 해당 값이 넘어오지 않아도 에러가 발생하지 않게끔 설정할 수 있다.

<br>

### DAO

```java
@Override
public List<InspectionResultVO> getInspectionResultList(Search search) {
    return sqlSession.selectList("inspectionMapper.getInspectionResultList", search);
}
```

<br>

