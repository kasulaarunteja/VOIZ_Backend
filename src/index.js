const express = require('express')
const {connect} = require('./config/db')



const app = express()
// const router = express.Router();
const cors = require('cors')
require('dotenv').config()



app.use(
    cors({
      origin: '*',
      credentials: true,
      methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'],
    }),
  )

app.get('/', (req,res) => {
    return res.send('hello world')
  })
  


const PORT = process.env.PORT || 8080


app.listen(PORT, async () => {
	try {
		await connect()
		console.log("Connected to DB");
	} catch (error) {
		console.log(error);
	}
});