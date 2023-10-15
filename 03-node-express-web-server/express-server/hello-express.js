const express = require('express') // (1)
const app = express() // (2)
const port = 3000

// prettier-ignore
app.get("/", (req, res) => { // (3) 
  res.set({ "Content-Type": "text/html; charset=utf-8" }); // (4)
  res.end("헬로 Express");
});

// prettier-ignore
app.listen(port, () => { // (5)
  console.log(`START SERVER : use ${port}`);
});
