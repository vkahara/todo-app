const path = require('path');
const loginController = require('../controllers//loginController');

const router = express.Router();

app.get('/', function(res, req) {
    res.sendFile(path.join(__dirname + '/login.ejs'));
});

app.post('/auth', loginController.login); //Authenticate user
app.get('/notes', loginController.notesView) //View notes if authenticated or ask user to login

module.exports = router;