const http = require('http');

const { mainPageMarkup, submitSuccessMarkup } = require('./views');
const { getMainPage, postForm } = require('./routes/routes');
const { router } = require('./routes/index')

const { PORT = 3000 } = process.env;

const server = http.createServer(router)

server.listen(PORT);
