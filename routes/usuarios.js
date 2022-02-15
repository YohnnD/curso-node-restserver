const {Router} = require('express');
const {userGet, userPost, userPut, userDelete}  = require('../controller/usuarios');

const router = Router();



router.get('/',  userGet);
router.post('/',  userPost);
router.put('/:id', userPut);
router.delete('/',  userDelete);

module.exports = router;