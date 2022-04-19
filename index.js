const express = require('express')
const app = express()
const path = require('path')
const port = 8000


//build in middleware
 const staticPath = path.join(__dirname,"/public")
app.use(express.static(staticPath));

app.get("/", (req, res) => {
  res.send('hello for express js');
})

app.listen(port, () => {
  console.log(`Listening to the port ${port}`);
})