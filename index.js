const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (request, response)=>{
  return response.json({message: 'First Application on AWS'})
});

app.listen(3000);