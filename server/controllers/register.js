const handleRegister = (db, bcrypt) => (req, res) => {
    const { email, name, password } = req.body;

    if (!email || !name || !password)
        return res.status(400).json('Incorrect from submition')

    const hash = bcrypt.hashSync(password, 8);
    const user = { name, email, hash, city: 'Saint-Petersburg' };

    db.push(user);

    return res.json({ 
        name: user.name, 
        email: user.email, 
        city: user.city 
    });
    
    // db.transaction(trx => {
    //     trx.insert({
    //         hash,
    //         email
    //     })
    //     .into('login')
    //     .returning('email')
    //     .then(loginEmail => {
    //         return trx('users').returning('*')
    //         .insert({
    //             email: loginEmail[0].email,
    //             name,
    //             joined: new Date()
    //         })
    //         .then(user => res.json(user[0]))
    //     })
    //     .then(trx.commit)
    //     .catch(trx.rollback)
    // })
    // .catch(err => res.status(400).json('unable to register'))
}

module.exports = {
    handleRegister
}