const fs = require('fs');
const path = require('path');
const accountPath = path.join(__dirname, "..", "data", "accounts.json")
const uuid = require('uuid/v1');
const index = () => {
    const accountJSON = fs.readFileSync(accountPath, 'utf-8');
    const accounts = JSON.parse(accountJSON);
    return accounts
}
const show = (id) => {
    const accountJSON = fs.readFileSync(accountPath, 'utf-8');
    const accounts = JSON.parse(accountJSON);
    const accountFound = accounts.find(account => account.id === id);
    return accountFound
}
const create = ({
    accountHolder,
    bankName,
    description
}) => {
    const accountJSON = fs.readFileSync(accountPath, 'utf-8');
    const accounts = JSON.parse(accountJSON);
    const accountCreate = {
        id: uuid(),
        accountHolder,
        bankName,
        description
    }
    accounts.push(accountCreate)
    updateAccountJSON = JSON.stringify(accounts);
    fs.writeFileSync(accountPath, updateAccountJSON)
    return accountCreate
}
const update = (id, {
    accountHolder,
    bankName,
    description
}) => {
    let newObj;
    const accountJSON = fs.readFileSync(accountPath, 'utf-8');
    const accounts = JSON.parse(accountJSON);
    const updateArray = accounts.map(account => {
        if (account.id === id) {
            newObj = {
                id,
                accountHolder: accountHolder || account.accountHolder,
                bankName: bankName || account.bankName,
                description: description || account.description

            }
            return newObj
        } else {
            return account
        }
    })
    updateAccountJSON = JSON.stringify(updateArray);
    fs.writeFileSync(accountPath, updateAccountJSON)
    return newObj


}
const destroy = (id) => {
    let deleteObj;
    const accountJSON = fs.readFileSync(accountPath, 'utf-8');
    const accounts = JSON.parse(accountJSON);
    const destroyAccount = accounts.filter(account => {
        if (account.id === id) {
            deleteObj = account;
            return false;
        } else {
            return true;
        }
    });
    deleteAccountJSON = JSON.stringify(destroyAccount);
    fs.writeFileSync(accountPath, deleteAccountJSON)
    return destroyAccount
}

module.exports = {
    index,
    show,
    create,
    update,
    destroy

}