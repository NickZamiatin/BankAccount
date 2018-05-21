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
    const accountJSON = fs.readFileSync(accountPath, 'utf-8');
    const accounts = JSON.parse(accountJSON);
    const accountFound = accounts.find(account => account.id === transactionFound.account_id);
    transactionFound.accountHolder = accountFound.accountHolder
    return transactionFound
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

const update = (id, { account_id,  amount, pending }) => {
    const transactionsJSON = fs.readFileSync(transactionPath, 'utf-8');
    const allTransactions = JSON.parse(transactionsJSON);
    let letObj;
    let updatedPending;
    const updatedTransactions = allTransaction.map(transaction => {
        if (transaction.id === id) {
            updatePending = pending === "undefined" ? transaction.pending : Boolean(pending)
            letObj = {
                id,
                account_id: account_id || transaction.account_id,
                amount: parseFloat(amount) || transaction.amount,
                pending: updatedPending

            };
            return letObj;
        } else {
            return transaction;
        }
    })
    transactionsJSONstring = JSON.stringify(allTransactions);
    fs.writeFileSync(transactionPath, transactionsJSONstring);
    return letObj;
};

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