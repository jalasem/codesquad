const express = require('express'),
  app = express();

app.use(express.static('./public'));

app.listen(3000, () => {
  console.log(`the squad website runs on port ${3000}`);
});