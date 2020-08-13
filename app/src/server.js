const express = require('express');
const nunjucks = require('nunjucks');
const app = express();

const { pageGiveClasses, pageLanding, pageStudy, saveClasses } = require('./pages')

nunjucks.configure('src/views',{
    express: app,
    noCache: true,
})

app .use(express.static('public'))
    .use(express.urlencoded({extended: true}))
    .get('/', pageLanding)
    .get('/study',pageStudy)
    .get('/give-classes',pageGiveClasses)
    .post('/save-classes',saveClasses)
    .listen(5500)

