const express = require('express');

const app = express();
const port = 3000;

//添加路由
app.use("/api",require("./api"));

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});