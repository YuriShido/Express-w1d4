const {v4: uuidv4} = require('uuid')


let members = [
    {
        id: uuidv4(),
        name: "Nico",
        email: 'ian@gmail.com',
        status: 'active'
    }, 
    {
        id: uuidv4(),
        name: 'Ayumi',
        email: 'ayumi@gmail.com',
        status: 'active'
    }
]

module.exports = members