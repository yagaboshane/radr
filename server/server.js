const express = require('express')
const cors = require('cors')
const data = require('./data/data.js')
const mongoose = require('mongoose')
const Album = require('./models/album.js')

const app = express()
const port = 4400

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())


mongoose.connect('mongodb+srv://bata_shane:Dell@Morimai1@clustershaneswitchmaven.hr9jm.gcp.mongodb.net/bata_shanedb?retryWrites=true&w=majority',
{useNewUrlParser: true, useUnifiedTopology: true},
    function(err, database){
        if (err){
            console.log('something went wrong')
            throw err;
        }
        console.log('connection made to database')
    }
)

app.get('/',(req, res)=>{
    console.log()
})

app.get('/', function(req, res) {

    console.log('routes are working?')
    res.send('hello world NEW PROJECT')
})

app.get('/albums', function(req, res) {
    console.log('the GET ALBUMS route was hit')
    res.send(data.albums)
})

app.get('/albums_from_db', function(req, res) {
    Album.find({})
    .then(function(albums){
        console.log(albums)
        res.send(albums)
    })
    .catch(function(err){
        console.log("albums could not be loaded")
        console.log(err)
        res.send(err)
    })
})


app.get('/add-one-album', function(req,res){
    albumToAdd = new Album({
        title:"Highway to hell",
        artist: "AC/DC",
        year: 1980,
        genre: "rock"
    })
    albumToAdd.save()
        .then(function(album){
            console.log("ITEM SAVED")
            console.log(album)
            res.send(album)
        })
        .catch(function(err){
            console.log(err)
            res.send(err)
        })
})

app.post('/albums', function(){
    console.log('ALBUM POST route was hit')
    console.log(req.body)

    albumObject = {
        title: req.body.title,
        artist: req.body.artist,
        year: req.body.year,
        genre: req.body.genre
    }
    albumToAdd.save()
        .then(function(album){
            console.log("ITEM SAVED HTTP format")
            console.log(album)
            res.send(album)
        })
        .catch(function(err){
            console.log(err)
        })
})


app.get('/get-first-album', function(req, res) {
    console.log('the GET FIRST ALBUMS route was hit')
    res.send(data.albums)
})

app.listen(port, function() {
    console.log(`Example app listening at http://localhost:${port}`)
})