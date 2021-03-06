const axios = require("axios");
const variables = require('../models').variables

module.exports = {
    list(req, res){
        variables.findAll(
            {attributes:['key','value']}
        )
            .then(
                variables => res.status(200).send(variables)
            )
            .catch(
                error => res.status(400).send(error)
            )
    },
    update(req, res){
        res.status(200).send("update")
        variables.findAll({
            where: {
                key: 'last_block'
            }
        }).then(
            varis => {
                const height = Number(varis[0].value) + 6;
                axios.get('https://mempool.space/api/block-height/'+height).then(
                    () => {
                        variables.update({value: height},{where: {key:'last_block'}}).then(
                            () => res.status(200).send("update")
                        )
                    }
                ).catch(
                    error => res.status(400).send(error)
                )
            });

    }
}