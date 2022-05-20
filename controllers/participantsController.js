const Participants = require('../models').participants
const variables =  require('../models').variables

module.exports = {
    create(req,res){
        variables.findAll({
            where: {
                key: 'pozo_acumulado'
            }
        }).then(
                values => {
                    console.log(values)
                    variables.update({value: parseFloat(values[0].value) + 0.0003},{key:'pozo_acumulado'})
                }
        )


        variables.findAll({
            where: {
                key: 'last_block'
            }
        }).then(
           varis => Participants.create({
               name: req.body.name,
               last_four_hash: req.body.last_four_hash,
               email: req.body.email,
               block: Number(varis[0].value) + 6
           })
               .then(
                   participant => res.status(201).send(participant)
               )
               .catch(
                   error => res.status(400).send(error)
               )
        )

    }
}