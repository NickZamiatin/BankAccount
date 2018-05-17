const fs = require('fs');
const path = require('path');
const accountPath = path.join(__dirname, ".." ,"data", "accounts.json")

const index = () =>{
    const accountJSON = fs.readFileSync(accountPath, 'utf-8');
    const accounts = JSON.parse(accountJSON);
    return accounts
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