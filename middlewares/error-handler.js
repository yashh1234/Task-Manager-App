const {CustomAPIError} = require('../errors/custom-error')
const errorHandlerMiddleware = (err, req, res, next)=> {
  if(err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({msg: error.message})
  }
  return res.status(500).json({ msg: 'Somrthing went wrong, please try again later.' })
}

module.exports = errorHandlerMiddleware