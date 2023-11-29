const User = require("../models/loginModel");
const bcrypt = require('bcrypt');

// Login function
exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });

        if (!user || !await bcrypt.compare(password, user.password)) {
            return res.status(401).send('Incorrect username or password');
        }

        req.session.loggedin = true;
        req.session.username = username;
        req.session.userId = user._id;
        res.redirect('/notes');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal server error');
    }
};


exports.register = async (req, res) => {
    try {
        const { username, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create and save the new user
        const newUser = new User({ username, password: hashedPassword });
        await newUser.save();

        // Automatically log in the user after successful registration
        req.session.loggedin = true;
        req.session.username = username;
        req.session.userId = newUser._id; // Store the new user's ID in the session

        res.redirect('/notes'); // Redirect to the notes page
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal server error');
    }
};

// View Notes (requires authentication)
exports.notesView = (req, res) => {
    if (req.session.loggedin) {
        res.send(`Welcome back, ${req.session.username}`);
    } else {
        res.send('Please login to view your notes');
    }
};
