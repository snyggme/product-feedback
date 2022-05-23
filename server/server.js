const express = require('express');
const bcrypt = require('bcryptjs');
const cors = require('cors');

const register = require('./controllers/register');
const signin = require('./controllers/signin');
const products = require('./controllers/products');
const upvotes = require('./controllers/upvotes');

const db = [ { name: 'bob', email: 'bob@gmail.com', hash: bcrypt.hashSync('123', 8), city: 'Saint-Petersburg' } ]

// const db = require('knex')({
//     client: 'pg',
//     connection: {
//         connectionString: process.env.DATABASE_URL,
//       	ssl: {
//         	rejectUnauthorized: false
//       	}
//     }
// });

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => { res.send(db) });
app.post('/signin', signin.handleSignin(db, bcrypt));
app.post('/register', register.handleRegister(db, bcrypt));
app.get('/products', products.handleProducts);
app.post('/add-feedback', products.handleAddFeedback)
app.put('/add-upvote/:id', upvotes.handleAddUpvotes);

app.listen(PORT, () => {
    console.log(`app is running on port ${PORT}`)
})