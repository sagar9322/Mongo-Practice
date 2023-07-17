const express = require('express');

const app = express();
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');

const cors = require('cors');
app.use(bodyParser.urlencoded({ extended: false }));
const mongoConnect = require('./util/database').mongoConnect;


app.use(cors());
app.use((req, res, next) => {
  next();
})

app.use(adminRoutes);

mongoConnect(() => {
  app.listen(3000);
});



