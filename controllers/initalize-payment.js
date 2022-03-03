const axios = require("axios")

exports.handleInitPayment = async (request, response) => {
  const {body: {email, amount}} = request;
  if (!email || !amount) return response.status(400).json({
      error: "Try again"
  });
  const options = {
    email: email,
    amount: amount,
    currency: 'NGN',
    metadata: {
      cart_id:398,
       custom_fields :[{
        display_name: "Invoice ID",
        variable_name :"Invoice ID",
        value :209
      }]
    }
  }
  try {
    const res = await axios.post('https://api.paystack.co/transaction/initialize',
     options,
     {
       headers: {
        Authorization: 'Bearer secret_key',
        'Content-Type': 'application/json'
     }
   })
   return response.status(200).json({
     message: "Successful",
     result: res.data
   })
  } catch (error) {
    console.log(error)
    response.status(500).json({ error: "An error occured" })
  }
};
