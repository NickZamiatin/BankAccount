
const accountModel = require("../models/account")

const index = (request , response)=>{
    const account = accountModel.index();
    response.send(account)
}
const show = (request, response) => {
        const account = accountModel.show(request.params.id);
        response.send(account)
}
const create = (request, response) => {
            const account = accountModel.create(request.body);
            response.send(account)
}
const update = (request, response) => {
            const account = accountModel.update(request.params.id, request.body);
            response.send(account)
}
const destroy = (request, response) => {
            const account = accountModel.destroy(request.params.id);
            response.send(account)
}



module.exports ={
    index,
    show,
    create,
    update,
    destroy

}