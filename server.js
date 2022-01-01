const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const bodyParser = require('body-parser');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3001;
//hides api key and session secret
const API_KEY = process.env.MOVIE_DB_KEY;
const SECRET = process.env.SESSION_SECRET;
const sess = {
  secret: SECRET,
  cookie: {},
  resave: false,
  saveUninitialized: true,
  
  store: new SequelizeStore({
    db: sequelize,
  }),
};
app.use(bodyParser.urlencoded());
app.use(session(sess));

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});

module.exports=API_KEY