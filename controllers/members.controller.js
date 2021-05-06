const {v4: uuidv4} = require(`uuid`)
const member = require('../model/Members')

exports.getAllMembers = (req, res, next) => {
    '/:id', (req, res, next) => {
        const found = members.some((member) => member.id === req.params.id)
    
        if(found) {
            res.json(member.filter(member => {
                console.log('paramsID', req.params.id);
                console.log('memberID', member.id);
                return member.id === req.params.id
            }))
        } else {
            res.status(400).json({msg: `No member with the id of ${req.params.id}`})
        }
    })
}