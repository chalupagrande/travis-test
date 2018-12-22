const express = require('express')
const ApiRouter = express.Router()
const InputModel = require('../models/InputModel')

ApiRouter.get('/', (req, res)=> {
  res.send('You sent have reached the api')
})

ApiRouter.post('/input', (req, res)=> {
    console.log(req)
    const ip = req.ip
    const input = req.body.input
    console.log('INPUT', req.body.input)
    const inputToSave = new InputModel({ip, input})
    inputToSave.save((err, input)=>{
      if(err) res.status(500).send('Oops, there was an error')
      else res.send({success: true, input})
    })
})

module.exports = ApiRouter
