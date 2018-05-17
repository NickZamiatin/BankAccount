const transactionModel = require('../models/transactions')

const index = (request, response) => {
    const account = transactionModel.index(request.params.account_id);
    response.send(account)
}
const show = (request, response) => {}
const create = (request, response) => {}
const update = (request, response) => {}
const destroy = (request, response) => {}


module.exports = {
    index,
    show,
    create,
    update,
    destroy

}