const fs = require('fs');
const path = require('path');
const transactionPath = path.join(__dirname, "..", "data", "transactions.json")
const uuid = require('uuid/v1');


const index = (account_id) => {
    const transactionJSON = fs.readFileSync(transactionPath);
    const allTransaction = JSON.parse(transactionJSON);
    const accountTransactionFilter = allTransaction.filter(transaction => transaction.account_id === account_id);
    return accountTransactionFilter
}
const show = (transaction_id) => {
    const transactionJSON = fs.readFileSync(transactionPath);
    const allTransaction = JSON.parse(transactionJSON);
    const transactionFound = allTransaction.find(transaction => transaction.id)
    return transactionFound
    // const accountJSON = fs.readFileSync(accountPath, 'utf-8');
    // const accounts = JSON.parse(accountJSON);
    //  if(transaction.id   === id ){
    //  transaction.id === account.id
    //  showJSON = JSON.stringify(transactionFound);
    //  fs.writeFile(transactionPath, showJSON)
    // we need take account_id and send to JSON
}
const create = (account_id, {
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
const update = (id, {
        amount,
        pending
    }) => {
        letObj;
    const transactionJSON = fs.readFileSync(transactionPath);
    const allTransaction = JSON.parse(transactionJSON);
        const updateTransactionArray = allTransaction.map(transaction => {
            if (transaction.id === id) {
                letObj = {
                    id,
                    amount: amount || transaction.amount,
                    pending: pending || transaction.pending

                }
                return letObj
            } else {
                return transaction
            }
        })
            updateTransactionJSON = JSON.stringify(updateTransactionArray);
            fs.writeFile(transactionPath, updateTransactionJSON)
            return letObj
}
const destroy = (transaction_id) => {
    let deleteObj;
    const transactionJSON = fs.readFileSync(transactionPath, 'utf-8');
    const allTransaction = JSON.parse(transactionJSON);
    const destroyTransaction = allTransaction.filter(transaction => {
        if (transaction.id === transaction_id) {
            deleteObj = transaction;
            return false;
        } else {
            return true;
        }
    });
    deleteTransactionJSON = JSON.stringify(destroyTransaction);
    fs.writeFile(transactionPath, deleteTransactionJSON)
    return destroyTransaction

}

module.exports = {
    index,
    show,
    create,
    update,
    destroy

}