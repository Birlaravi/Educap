
const router = require('express').Router();
const User= require('../controller/UserController')
//router.use(express.json());
router.get('/',User.allUsers);
router.post('/reg',User.createUser);
//router.get('/:uid',User.singleUserId);
router.get('/:uname',User.singleUserName);
router.post('/:uid',User.updateUser);
router.post('/delete',User.deleteUser);


module.exports = router;