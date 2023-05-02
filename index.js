const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
app.use(cors());
const chefsProfiles = require('./data/chefprofile.json')
const recipes = require('./data/chefsRecipes.json')
app.get('/recipes', (req,res)=>{
    res.send(recipes)
})
app.get('/recipes/:id', (req, res) => {
    const id = req.params.id;
    console.log(id)
    const selectedChef = recipes.filter(r=>r.chef_id == id);
    console.log(selectedChef)
    res.send(selectedChef)
})
app.get('/chefsprofile',(req,res)=>{
    res.send(chefsProfiles)
})

app.get('/', (req, res) => {
    res.send(`hello world from dishdelight ${port}`)
})

app.listen(port,()=>{
    console.log(`listening on ${port}`)
})