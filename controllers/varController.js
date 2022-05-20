const variables = require('../models').variables

module.exports = {
    list(req, res){
        variables.findAll(
            {attributes:['key','value']}
        )
            .then(
                variables => res.status(201).send(variables)
            )
            .catch(
                error => res.status(400).send(error)
            )
    },
    update(req, res){
            
    }
}