const express = require('express')
const Product = require('./models/Product')
const app = express()
const productRoutes = require('./routes/Product')

app.use(cors())
app.use(express.json())

//  database connectioin

// Product Routes

app.use('/product', productRoutes)

app.listen(3000, () => {
  console.log('serve running on')
})
