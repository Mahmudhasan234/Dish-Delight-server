const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
app.use(cors());
const chefsProfiles = require('./data/chefprofile.json')

app.get('/chefsprofile',(req,res)=>{
    res.send(chefsProfiles)
})

app.get('/', (req, res) => {
    res.send(`hello world from dishdelight ${port}`)
})

app.listen(port,()=>{
    console.log(`listening on ${port}`)
})