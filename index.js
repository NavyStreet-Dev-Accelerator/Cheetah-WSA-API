const axios = require('axios')

exports.handler = async (event) => {
    const { queryStringParameters: { url,query } } = event
    try{
        const res = await axios.get(url) 
        const data = await res.data
        const search = await query
        
        return url
    }
    catch(err){
        return err.message
    }
     
};
