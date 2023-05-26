import express from 'express';
import router from './routers/routers.js';
import database from './database/database.js'

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.use('/students', router);

app.set('view engine', 'ejs');
app.set('views', './src/views');


app.listen(3000, () => {
    console.log("Servidor Rodando na Porta 3000");
});
