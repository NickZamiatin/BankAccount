const fs = require('fs');
const path = require('path');
const transactionPath = path.join(__dirname, "..", "data", "transactions.json")


const index = (account_id) => {
    const transactionJSON =  fs.readFileSync(transactionPath);
    const allTransaction = JSON.parse(transactionJSON);
    const accountTransactionFilter = allTransaction.filter(transaction => transaction.account_id ===account_id);
    return accountTransactionFilter
}
const show = () => {}
const create = () => {}
const update = () => {}
const destroy = () => {}

module.exports = {
    index,
    show,
    create,
    update,
    destroy

}