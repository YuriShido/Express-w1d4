const express = require('express')
const path = require('path')
const membersRoute = require('./routes/routes')
const members = require('./model/Members')

const app = express()

app.set('view engine','ejs')
app.set('views', 'views')

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.get('/', (req, res) => {
    res.render('index', {
        title: "Hola with EJS",
        members
    })
})

//route
app.use('/api/members', membersRoute)

//catch all-middleware
app.use((req, res, next) => {
    res.render('404', {
        title: 'Page not found'
    })
})


const PORT = process.env.PORT || 9000
app.listen(PORT, ()=> console.log(`Server has started on port ${PORT}...`))



