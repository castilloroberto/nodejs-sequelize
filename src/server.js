const express = require('express')
const {sequelize,User} = require('../models')

const app = express()

app.use(express.json())

app.get('/',(req,res)=>{

    res.status(500).json({
        msg:'hola mundo',
        status:500
    })

})

app.post('/',async (req,res) => {

    const {body} = req

    try {
        const user = await User.create(body)
        res.json({
            msg:'hola mundo',
            user
        })
        
    } catch (error) {
        console.error('Error:',error);
        return res.status(500).json({error})  
    }


})

app.listen({port:3000}, async () => {
    await sequelize.sync({force:true})
    console.log('database synced!');
    console.log('server up on http://localhost:3000');

})


