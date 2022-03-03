const crypto = require("crypto");
const secret = 'secret_key';

exports.handleVerifyPayment = (request, response) => {
    const hash = crypto.createHmac('sha512', secret).update(JSON.stringify(request.body)).digest('hex');
    if (hash == request.headers['x-paystack-signature']) {
    // Retrieve the request's body
    const res = request.body
    console.log('Webhook was called by PAYSTACK, Log are below!')
    console.log(res)
  }
};
