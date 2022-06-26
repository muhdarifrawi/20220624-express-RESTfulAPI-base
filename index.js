const express = require('express')
const cors = require("cors")
const app = express()
const port = 3000

require("dotenv").config()

const MongoUtil = require("./MongoUtil")
const MONGO_URI = process.env.MONGO_URI

app.use(cors())


async function main(){

    try {
        const db = await MongoUtil.connect(MONGO_URI, "sample_food");
    }
    catch(e){
        console.log(e);
    }
    finally{
        console.log("Database connected");
    }


    app.get('/', (req, res) => {
        res.send('Express is running.')
    })
    
}

main();

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})