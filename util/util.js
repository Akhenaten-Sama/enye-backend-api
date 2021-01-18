const axios = require('axios')



const getRates= async (base, rates)=>{
    try{
        const data = await axios.get(`https://api.exchangeratesapi.io/latest?base=${base}&symbols=${rates}`).then(res=> res.data)
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


module.exports = getRates