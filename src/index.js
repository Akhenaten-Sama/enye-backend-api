const express = require('express')
const getRates = require('../util/util')



const app = express()
const port = process.env.PORT || 3003

// our endpoit
app.get('/api/rates', async (req, res)=>{
    
    //save both the base and rates from the query param
 const base = req.query.base;
 const rates = req.query.currency;

 //check user input
if(!base||!rates) return res.send({err:'please input a base currency and at least one currency you want to check against'})
  try{
      //get rates
    const result = await getRates(base, rates)
    
    //check for invalid currency error, if no error, send result
    result.error? res.status(400).send({err:'currency code may not be valid', result}): res.status(200).send(result)
  }catch(err){
      res.status(501).send(err)
  }
 

})

//start app
app.listen(port, ()=> console.log(`Server is listening at ${port}`))