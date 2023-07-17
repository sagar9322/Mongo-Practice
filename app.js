const express = require('express');

const app = express();
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const User = require('./models/user');

const cors = require('cors');
app.use(bodyParser.urlencoded({ extended: false }));
const mongoConnect = require('./util/database').mongoConnect;


app.use(cors());
app.use((req, res, next) => {
  User.findById('64b5390f08979986fa77a6ba')
    .then(user => {
      req.user = user;
      next();
    })
    .catch(err => console.log(err));
})

app.use(adminRoutes);

mongoConnect(() => {
  app.listen(3000);
});



