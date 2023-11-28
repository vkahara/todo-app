const { path, notesView } = require('../controllers/loginController');
const loginController = require('../loginController');

const router = express.Router();

app.get('/', function(res, req) {
    res.sendFile(path.join(__dirname + '/login.html'));
});

app.post('/auth', loginController.login); //Authenticate user
app.get('/notes', loginController.notesView) //View notes if authenticated or ask user to login


