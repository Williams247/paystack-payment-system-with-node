exports.handleWelcomeConsumer = (request, response) => {
  return response.status(200).json({ message: "Welcome to paystack payment system with NODE." })
};
