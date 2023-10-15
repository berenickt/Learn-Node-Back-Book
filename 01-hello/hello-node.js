const http = require('http') // (1) http 객체 생성

let count = 0

// (2) 서버 객체 생성
const server = http.createServer((req, res) => {
  console.log((count += 1)) // (3) 카운트 1 증가
  res.statusCode = 200 // (4) 결과값 200
  res.setHeader('Content-Type', 'text/plain') // (5) 헤더 설정
  res.write('hello\n') // (6) 응답값 설정

  // (7) 2초 후 "Node.js" 출력
  setTimeout(() => {
    res.end('Node.js')
  }, 2000)
})

// (7) 8000번 포트로 서버 실행, 접속 대기
server.listen(8000, () => console.log('Hello Node.js'))
