const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')
const rootDir = require('./util/path')

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
   // res.send('<html><body><h1>Not found</h1></body></html>')
   res.sendFile(path.join(rootDir, 'views', '404.html'));
});

app.listen(3000);

