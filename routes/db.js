var express = require('express')
var router = express.Router()

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('myData.db');

router.get('/', function(req,res,next){
    let data = []
    db.all('SELECT*FROM PersonalData',(err,rows)=>{
        let opt = {
            title:'Hello!',
            data: rows
        }
        res.render('db',opt)
    });
})

module.exports = router;