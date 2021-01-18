const express = require('express')
const getRates = require('../util/util')



const app = express()
const port = process.env.PORT || 3003


app.get('/api/rates', async (req, res)=>{
 const base = req.query.base;
 const rates = req.query.currency;
if(!base||!rates) return res.send('please input a base currency and at least one currency you want to check against')
  try{
    const result = await getRates(base, rates)
    result.error? res.status(400).send(result): res.status(200).send(result)
  }catch(err){
      res.status(501).send(err)
  }
 

})


app.listen(port, ()=> console.log(`Server is listening at ${port}`))