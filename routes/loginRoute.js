const path = require('path');
const loginController = require('../controllers//loginController');
const router = express.Router();

router.get('/', function(res, req) {
    res.sendFile(path.join(__dirname + '/login.ejs'));
});

router.post('/auth', loginController.login); //Authenticate user
router.get('/notes', loginController.notesView) //View notes if authenticated or ask user to login


module.exports = router;