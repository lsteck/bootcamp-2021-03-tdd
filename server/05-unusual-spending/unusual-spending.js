
const {categorize} = require('./categorize');
const {email} = require('./email');
const {fetch} = require('./fetch');


const unusualSpending = (userID) => {
    const payments = fetch(userID);
    const categorizedPayments = categorize(payments);
    email(userID, categorizedPayments);
}
module.exports={unusualSpending}