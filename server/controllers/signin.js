const handleSignin = (db, bcrypt) => (req, res) => {
    const { email, password } = req.body;

    if (!email || !password)
        return res.status(400).json('Incorrect from submition');

    const userIndex = db.findIndex(item => item.email === email);

    if (userIndex > -1) {
        const isValid = bcrypt.compareSync(password, db[userIndex].hash);

        if (isValid) {
            const user = { 
                name: db[userIndex].name, 
                email: db[userIndex].email, 
                city: db[userIndex].city 
            };

            return res.json(user);
        } else {
            return res.status(400).json('Wrong credentials');
        }
        
    } else {
        return res.status(400).json('Wrong credentials');
    }

    // db.select('email', 'hash').from('login')
    // .where('email', '=', email)
    // .then(data => {
    //     const isValid = bcrypt.compareSync(password, data[0].hash);

    //     if (isValid){
    //         return db.select('*').from('users')
    //         .where('email', '=', email)
    //         .then(user => {
    //             res.json(user[0])
    //         })
    //         .catch(err => res.status(400).json('Unable to get User'));
    //     } else {
    //         res.status(400).json('Wrong credentials');
    //     }
    // })
    // .catch(err => res.status(400).json('Wrong credentials'));
}

module.exports = {
    handleSignin
}