const fs = require('fs');
const path = require('path');
const transactionPath = path.join(__dirname, "..", "data", "transactions.json")
const uuid = require('uuid/v1');


const index = (account_id) => {
    const transactionJSON =  fs.readFileSync(transactionPath);
    const allTransaction = JSON.parse(transactionJSON);
    const accountTransactionFilter = allTransaction.filter(transaction => transaction.account_id ===account_id);
    return accountTransactionFilter
}
const show = (transaction_id) => {
        const transactionJSON = fs.readFileSync(transactionPath);
        const allTransaction = JSON.parse(transactionJSON);
    const transactionFound = allTransaction.find(transaction =>transaction.id === id)
    
}
const create = (account_id,{
        amount,
        pending
    }) => {
        const transactionJSON = fs.readFileSync(transactionPath);
        const allTransaction = JSON.parse(transactionJSON);
     const transactionCreate = {
         id: uuid(),
         amount: parseFloat(amount),
         pending: Boolean(pending)
     }
     allTransaction.push(transactionCreate)
     updatTransactionJSON = JSON.stringify(allTransaction);
     fs.writeFile(transactionPath, updatTransactionJSON)
     return transactionCreate
}
const update = (transaction_id) => {
        const transactionJSON = fs.readFileSync(transactionPath);
        const allTransaction = JSON.parse(transactionJSON);
}
const destroy = (transaction_id) => {
        const transactionJSON = fs.readFileSync(transactionPath);
        const allTransaction = JSON.parse(transactionJSON);
}

module.exports = {
    index,
    show,
    create,
    update,
    destroy

}