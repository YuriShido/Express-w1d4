const express = require('express')
const { message } = require('statuses')
const {v4: uuid} = require('uuid')
const members = require('../model/Members')

const router = express.Router()


//Get AL members
router.get('/', (req, res, next) => {
    res.json(members)
})

//Get One member
router.get('/:id', (req, res, next) => {
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
//Create a member
router.post('/post', (req, res, next) => {
    const newMember = {
        id: uuidv4(),
        status: 'active',
        // name: req.body.name,
        // email: req.body.email
        ...req.body
    }
    members.push(newMember)
    res.redirect('/')
})
//Update a member
router.put('/update/:id', (req, res, next) => {
    const found = members.some((member) => member.id === req.params.id)
    if(found) {
        const updateMember = members.map(member => {
            if(member.id === req.params.id) {
                return {
                    ...member,
                    ...req.body
                }
            }
            return member
        })
        res.json({msg: 'Member updated', updatedMember})
    } else {
        res.status(400).json({msg: `No member with the id of ${req.params.id}`})
    }
})
//Delete a member
router.delete('/delete/:id', (req, res, next) => {
    const found = members.some((member) => member.id === req.params.id)

    if(found) {
        res.json({
            msg: 'Member deleted successfully',
            member: members.filter(member => member.id !== ewq.params.id)
        })
    } else {
        res.status(400).json({ msg: `No member with the id of ${req.params.id}`})
    }

})
module.exports = router