const app = require('express')();
const dbConnection = require('./config/dbConfig')


require('./config/express')(app);
require('./config/routes')(app);
 

dbConnection()
    .then(() => console.log('DB Connected successfully!'))
    .catch(err => console.log('DB error:', err))

app.listen(3000, console.log('Listening on port 3000! Now its up to you...'));
