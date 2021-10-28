require('dotenv').config()

const express = require('express')

const app = express()

const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send(`
        <h1>Web ${process.env.COHORT} Rocks!</h1>
    `)
})
app.get('/port', (req, res) => {
    res.send(`<div>port is ${PORT}</div>`)
})

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})


function cohortRocks() { // eslint-disable-line
    console.log('arguments', process.argv.slice(2))
    console.log(`web ${process.argv[2]} rocks`)
}
function cohortRocksEnv() {
    console.log(`home folder is ${process.env.HOME}`)
    console.log(`shell is ${process.env.SHELL}`)
    console.log(`In my enviroment FOO is ${process.env.FOO}`)
    console.log(`My super secret comes from ${process.env.SUPER_SECRET}`)
}

cohortRocksEnv()