const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const www = __dirname + '//src';
app.use(express.static(www));
console.log(`serving ${www}`);
app.get('*', (req, res) => {
  res.sendFile(`/index.html`, { root: www });
});
app.listen(port, () => console.log(`listening on: ${port}`));
