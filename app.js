const express = require("express");
const bodyParser = require("body-parser");
const https = require('https');
const fs = require('fs');

const sequelize = require("./util/database");

const host = 'https://realn.pl'; 
const port = process.env.PORT || 5000;

const app = express();
const cors = require('cors');

const agentRoutes = require("./routes/agent");
const contactRoutes = require("./routes/contact");
const mailRoutes = require("./routes/mails");
const options = {
  key: fs.readFileSync('./privkey1.pem'),
  cert: fs.readFileSync('./cert1.pem'),
};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use(agentRoutes)
app.use(contactRoutes)
app.use(mailRoutes)

const server = https.createServer(options, app);

sequelize
.sync()
.then(() => {
    server.listen(port, () => {
      console.log(process.env)
      console.log(`Server is running on ${host}:${port}`);
    });
  })
  .catch((error) => {
    console.error("Error syncing database:", error);
  });
