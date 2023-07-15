const router = require("express").Router();
const channelController =require("../controllers/channelControllers");

router.post('/create',channelController.create);
router.get('/channels', channelController.getAll);
router.post('/addChToDev', channelController.addChToDev);
router.get('/getValByDevAndCh/:dev/:ch', channelController.getValByDevAndCh);


module.exports = router;