const router = require("express").Router();

router.post("/initialize-payment", require("../controllers/initalize-payment").handleInitPayment);
router.post('/verify-payment', require('../controllers/verify-payment').handleVerifyPayment)
router.get('/', require('../controllers/welcome').handleWelcomeConsumer)

module.exports = router;
