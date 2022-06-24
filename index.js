const express = require('express')
const cors = require("cors")
const app = express()
const port = 3000

app.use(cors())


async function main(){
    app.get('/', (req, res) => {
        res.send('Express is running.')
    })
    
}

main();

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})