const Joi = require('joi');

module.exports= (data)=>{
    const schema = Joi.object({
        name: Joi.string(),
        // code:Joi.string(),

        
    })
    return schema.validate(data)
}