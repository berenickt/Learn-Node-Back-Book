# 1. 웹 서버와 WAS

- 웹 서버 : 요청된 웹페이지나 정보를 제공하는 서버, 주로 정적 콘텐츠 제공
  - 아파치 HTTP Server, Nginx, IIS
- WAS : 동적인 웹 앱을 실행하는 사용하는 서버, 단독으로 사용하기보다 웹 서버 뒤에 요청에 대한 응답을 제공
  - e.g. 아파치, 톰캣, 웹스피어, JEUS, IIS

# 2. API

API를 작성할 때 많은 경우 REST 방법으로 API를 작성합니다.

```js
{
  user(id: "1000") {
    name
    createDt
  }
}
```
