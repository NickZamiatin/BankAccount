const transactionModel = require('../models/transaction')

const index = (request, response) => {
    const account = transactionModel.index(request.params.account_id);
    response.send(account)
}
const show = (request, response) => {
        const account = transactionModel.show(request.params.id);
        response.send(account)
}
const create = (request, response) => {
        const account = transactionModel.create(request.params.account_id, request.body);
        response.send(account)
}
const update = (request, response) => {
            const account = transactionModel.update( request.params.transaction_id, request.body);
            response.send(account)
}
const destroy = (request, response) => {
            const account = transactionModel.destroy(request.params.id);
            response.send(account)
}


module.exports = {
    index,
    show,
    create,
    update,
    destroy

}