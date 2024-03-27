const express = require('express');

const app = express();

app.use(express.static('public'));
app.use(express.static('src'));
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    res.render('home.ejs');
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});