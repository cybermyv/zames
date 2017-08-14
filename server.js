import express from 'express';
import bodyParser from 'body-parser';
import dbEngine from './dbengine';

const app = express();
const path = __dirname + '/views';

app.use(bodyParser.json);
app.use(bodyParser.urlencoded({extended: true}));

 app.get('/', async(req, res) => {
     res.end('HW!');
 });


app.listen(3000, err =>{
    if(err) throw err;
    console.log('Сервер стартовал по адресу: http://localhost:3000');
}); 