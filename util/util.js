const axios = require('axios')


//utility function to help us get results
const getRates= async (base, rates)=>{
    try{

        const data = await axios.get(`https://api.exchangeratesapi.io/latest?base=${base}&symbols=${rates}`).then(res=> res.data)
       
        //format the result
        const result = {
            results:{
            base:data.base,
            date: data.date,
            rates:data.rates
        }
    }
        return result
    }catch(err){
        return {error:err.message}
    }
  
}

//export our utility function
module.exports = getRates