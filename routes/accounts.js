const  express = require('express');
const router = express.Router();
const accountController = require('../accountController');

router.get('/accounts', accountController.index );
router.get('/accounts/:id', accountController.show);
router.post('/accounts', accountController.create);
router.put('/accounts/:id', accountController.update);
router.delete('/accounts?:id', accountController.destroy);



module.exports = router;