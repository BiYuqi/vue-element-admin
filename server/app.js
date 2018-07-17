const express = require('express')
const app = express()

app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild')
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS')

  if (req.method === 'OPTIONS') {
    res.send(200)
  } else {
    next()
  }
})

app.get('/system/userInfo', (req, res) => {
  if (req.query.role === 'admin') {
    res.json({
      data: {
        role: ['admin']
      }
    })
  } else {
    res.json({
      data: {
        role: ['user']
      }
    })
  }
})

app.listen(process.env.PORT || 1234, () => {
  console.log('HTTP Server is running in http://localhost:1234')
})
